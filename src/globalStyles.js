import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
   *{
    box-sizing: border-box;
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
`;

export default GlobalStyle;
