import styled from 'styled-components'

export const Image = styled.img``

export const Infos = styled.div`
  font-size: 12px;
  h2 {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const Review = styled.div`
  h2 {
    margin-top: 32px;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }
  span {
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray};
    flex-direction: row;
  }
`

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-top: 45px;
  font-size: 12px;

  span {
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.gray};
    flex-direction: row;
  }
`

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  line-height: 4 0px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.dark};
`

export const Author = styled.div`
  font-size: 12px;
  min-height: 40px;
  line-height: 20px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.pink40};
`

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  gap: 95px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;

  width: 100%;
  min-width: 769px;
  min-height: 608px;
`

export const ContentImage = styled.div`
  width: 349px;
  height: 512px;
  margin-top: 48px;
  margin-left: 48px;
`
export const ContentInfos = styled.div`
  width: 349px;
  height: 512px;
  text-align: left;
  margin-top: 48px;
  margin-left: 48px;
  margin-right: 48px;
`
