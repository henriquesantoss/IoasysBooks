import styled from 'styled-components'
import backgroundLogin from '../../assets/login.jpg'

export const Container = styled.div`
  background: url(${backgroundLogin}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`

export const Content = styled.div``

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: absolute;
  left: 150px;
  top: 31%;
`
