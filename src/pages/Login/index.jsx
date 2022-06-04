import * as S from './Login.Style'
import Input from '../../components/Input/Input'

import Header from '../../components/Header/Header'

const Login = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Forms>
          <Header /> 
          <Input type="email" name="Email" />
          <Input type="password" name="Senha"  isSubmit />
        </S.Forms>
      </S.Content>
    </S.Container>
  )
}

export default Login
