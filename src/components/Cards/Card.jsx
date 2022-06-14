import * as S from './Card.Style'
import background from '../../assets/background/book.jpg'

const Card = ({
  onClick,
  book: { authors, publisher, title, pageCount, imageUrl, published },
}) => (
  <S.Container onClick={onClick}>
    <S.ImageContainer>
      {
        <S.Image
          src={imageUrl ? imageUrl : background}
          width={82}
          height={122}
          alt={title}
        />
      }
    </S.ImageContainer>

    <div className="content">
      <S.Title>{title ?? 'Livro desconhecido'}</S.Title>
      <S.Author>{authors[0] ?? 'Autor desconhecido'}</S.Author>
      <S.Description>
        <span> {pageCount ?? 'Numero de paginas desconhecidas'} páginas</span>
        <span> {publisher ?? 'Editora desconhecida'} </span>
        <span> Publicado em {published ?? 'Publicação desconhecida'}</span>
      </S.Description>
    </div>
  </S.Container>
)

export default Card
