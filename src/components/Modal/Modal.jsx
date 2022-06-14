import Modal from 'react-modal'
import * as S from './Modal.Style'
import background from '../../assets/background/book.jpg'
import { useState } from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const ModalStyle = ({ isOpen = false, book }) => {
  return (
    <>
      <Modal isOpen={isOpen} style={customStyles}>
        {book && (
          <S.Content>
            <S.ContentImage>
              <S.Image src={book.imageUrl ? book.imageUrl : background} />
            </S.ContentImage>
            <S.ContentInfos>
              <S.Title>
                {book.title ? book.title : 'titulo desconhecido'}
              </S.Title>
              <S.Author>
                {book.authors ? book.authors : 'autores desconhecidos'}
              </S.Author>
              <S.Description>
                <S.Infos>
                  <h2>INFORMAÇOES</h2>
                  <p>Páginas</p>
                  <p>Editora</p>
                  <p>Publicação</p>
                  <p>Idioma</p>
                  <p>Título Original</p>
                  <p>ISBN-10</p>
                  <p>ISBN-13</p>
                </S.Infos>
                <S.Result>
                  <span>
                    {book.pageCount ? book.pageCount : 'desconhecidas'} páginas
                  </span>
                  <span>
                    {book.publisher ? book.publisher : 'desconhecida'}
                  </span>
                  <span>
                    {book.published ? book.published : 'desconhecido'}
                  </span>
                  <span>{book.language ? book.language : 'desconhecido'}</span>
                  <span>{book.title ? book.title : 'desconhecido'}</span>
                  <span>{book.isbn10 ? book.isbn10 : 'desconhecido'}</span>
                  <span>{book.isbn13 ? book.isbn13 : 'desconhecido'}</span>
                </S.Result>
              </S.Description>
              <S.Review>
                <h2>RESENHA DA EDITORA</h2>
                <span>
                  {book.description ? book.description : 'desconhecida'}
                </span>
              </S.Review>
            </S.ContentInfos>
          </S.Content>
        )}
      </Modal>
    </>
  )
}
export default ModalStyle
