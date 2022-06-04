import styled from 'styled-components'

export const Content = styled.div`
  width: 368px;
  height: 65px;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  border: none;
  position: relative;
  left: 48px;
`

export const Label = styled.label`
  color: #ffffff;
  opacity: 0.5;
  margin-left: 16px;
  margin-top: 10px;
  display: inline-block;
  font-size: 12px;
  letter-spacing: 0.5px;
`

export const Row = styled.div`
  display: flex;
`

export const Input = styled.input`
  width: 230px;
  background-color: transparent;
  border: none;
  height: 24px;
  margin-left: 16px;
  margin-top: 8px;
  color: #ffffff;
  font-size: 16px;
`

export const Button = styled.button`
  width: 85px;
  height: 36px;
  background: #ffffff;
  border-radius: 44px;
  color: #b22e6f;
  font-weight: 700;
  margin-left: 22px;
  margin-right: 12px;
  margin-block: auto;
  font-size: 16px;
  position: relative;
  top: -10px;
`
