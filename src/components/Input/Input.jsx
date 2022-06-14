import * as S from './Input.Style'

const Input = ({ type, placeholder, name, isSubmit, onSubmit, onChange }) => {
  return (
    <S.Content>
      <S.Label>{name}</S.Label>
      <S.Row>
        <S.Input type={type} onChange={onChange} />
        {isSubmit && <S.Button onClick={onSubmit}>Entrar</S.Button>}
      </S.Row>
    </S.Content>
  )
}

export default Input
