import * as S from './Home.Style'
import Header from '../../components/Header/Header'
import Card from '../../components/Cards/Card'
import books from '../../mocks/books.json'
import { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import axios from 'axios'
import user from '../../mocks/user.json'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [openModal, setOpenModal] = useState({ visible: false, book: null })
  const handleOpenModal = (book) => {
    setOpenModal({ visible: true, book })
  }
  const handleCloseModal = ({ ButtonModal }) => {
    setOpenModal({ visible: false, book: null })
  }
  const [books, setBooks] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const meuToken = localStorage.getItem('authorization')
    if (meuToken) {
      axios
        .get('https://books.ioasys.com.br/api/v1/books?page=1&amount=25', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('authorization')}`,
          },
        })
        .then(({ data }) => {
          setBooks(data.data)
        })
        .catch((e) => {
          if (e.response.status == 401) {
            navigate('/')
          }
        })
    } else {
      navigate('/')
    }
  }, [])

  return (
    <>
      <S.Container>
        <Header mode="dark" />
        <S.Content>
          <S.CardsContainer>
            {books.map((book) => (
              <Card
                key={book.id}
                book={book}
                onClick={() => handleOpenModal(book)}
              />
            ))}
          </S.CardsContainer>
        </S.Content>
      </S.Container>
      <Modal
        isOpen={openModal.visible}
        book={openModal.book}
        onRequestClose={handleCloseModal}
      ></Modal>
      <S.ButtonModal>
        <button onClick={handleCloseModal}>X</button>
      </S.ButtonModal>
    </>
  )
}

export default Home
