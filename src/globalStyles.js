import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
   *, *::before, ::after{
    box-sizing: border-box;
   }
   *{
    margin: 0;
    padding: 0;
    font-family: 'Encode Sans Expanded', sans-serif;
   }
   html {
    --color-dark: #222629;
    --color-green:#144C70;
    --color-white: #fff;
  }
  img{
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
