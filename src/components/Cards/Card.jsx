import * as S from './Card.Style'
import background from '../../assets/background/book.jpg'

const Card = ({
    book: {
        authors, publisher, title, pageCount, imageUrl, published,
    },
}) => (
    <S.Container>
        <S.ImageContainer>
            {
                <S.Image src={imageUrl ? imageUrl : background} width={82} height={122} alt={title} />
            }
        </S.ImageContainer>

        <div className="content">
            <S.Title>
                {title ?? 'Livro desconhecido'}
            </S.Title>
            <S.Author>
                {authors ?? 'Autor desconhecido'}
            </S.Author>
            <S.Description>
                {pageCount ? "paginas" : "Quantidade de paginas desconhecidas"}
            </S.Description>
        </div>
    </S.Container>
)

export default Card;