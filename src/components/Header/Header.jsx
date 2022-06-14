import { useState } from 'react'
import * as S from './Header.Style'
import LogoWhite from '../../assets/logo/white.svg'
import LogoBlack from '../../assets/logo/black.svg'
import user from '../../mocks/user.json'
const Header = ({ mode = 'light', user = null }) => {
  const [actualMode] = useState(mode || 'light')

  return (
    <S.Container>
      <S.Logo mode={actualMode}>
        <img src={actualMode === 'dark' ? LogoBlack : LogoWhite} alt="ioasys" />
        <span>Books</span>
      </S.Logo>
      <S.User>
        <span>Bem vindo Doutor(a) {user}</span>
      </S.User>
    </S.Container>
  )
}

export default Header
