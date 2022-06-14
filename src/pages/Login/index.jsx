import * as S from './Login.Style'
import Input from '../../components/Input/Input'
import Header from '../../components/Header/Header'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formsDados, setFormsDados] = useState({ email: '', password: '' })
  let navigate = useNavigate()
  const requestLogin = () => {
    console.log('formsDados', formsDados)
    axios
      .post('https://books.ioasys.com.br/api/v1/auth/sign-in', {
        ...formsDados,
      })
      .then(({ data, headers }) => {
        localStorage.setItem('authorization', headers.authorization)
        localStorage.setItem('name', data.name)
        localStorage.setItem('birthdate', data.birthdate)
        navigate('/home')
      })
  }
  return (
    <S.Container>
      <S.Content>
        <S.Forms>
          <Header />
          <Input
            onChange={(e) =>
              setFormsDados({ ...formsDados, email: e.target.value })
            }
            type="email"
            name="Email"
          />
          <Input
            onChange={(e) =>
              setFormsDados({ ...formsDados, password: e.target.value })
            }
            type="password"
            name="Senha"
            isSubmit
            onSubmit={() => requestLogin()}
          />
        </S.Forms>
      </S.Content>
    </S.Container>
  )
}

export default Login
