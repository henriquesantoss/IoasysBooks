import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;500;600;700;800;900&display=swap');

  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Heebo', sans-serif;
  }

  button {
      border: none;
      cursor: pointer;
  }

  body {
      width: 100%;
      height: 100vh;
      color:  ${({ theme }) => theme.colors.black};
  }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
  }
`
