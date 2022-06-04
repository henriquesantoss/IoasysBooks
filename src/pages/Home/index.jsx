import * as S from './Home.Style';
import Header from '../../components/Header/Header';
import Card from '../../components/Cards/Card';
import books from '../../mocks/books.json'

const Home = () => {
    return (
        <S.Container>
            <Header mode="dark"/>
            <S.Content>
                <S.CardsContainer>
                    {books.map((book) => (
                        <Card key={book.id} book={book}/>
                    ))}
                </S.CardsContainer>
            </S.Content>
            <p>Almost before</p>
        </S.Container>
    );
}

export default Home;