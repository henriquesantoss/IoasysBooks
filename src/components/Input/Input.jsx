import * as S from './Input.Style'

const Input = ({ type, placeholder, name, isSubmit }) => {
  return (
    <S.Content>
      <S.Label>{name}</S.Label>
      <S.Row>
        <S.Input type={type}  />
        {isSubmit && <S.Button>Entrar</S.Button>}
      </S.Row>
    </S.Content>
  )
}

export default Input
