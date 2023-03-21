import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

// TODO here
const GlobalStyle = createGlobalStyle`
      ${reset}
      
      @font-face {
        font-family: SpoqaHanSansNeo;
        font-weight: normal;   
        src: url(./fonts/SpoqaHanSansNeo-Regular.ttf) format('truetype'),url('./fonts/SpoqaHanSansNeo-Regular.woff') format('woff')
      }

      @font-face {
        font-family: SpoqaHanSansNeo;
        font-weight: medium;
        src: url(./fonts/SpoqaHanSansNeo-Medium.ttf) format('truetype'), url('./fonts/SpoqaHanSansNeo-Medium.woff') format('woff')
      }

      @font-face {
        font-family: SpoqaHanSansNeo;
        font-weight: bold;
        src: url(./fonts/SpoqaHanSansNeo-Bold.ttf) format('truetype'), url('./fonts/SpoqaHanSansNeo-Bold.woff') format('woff')
      }
      
      html, body {
        height: 100%;
        width: 100%;
      }
     
      a {
        color: inherit;
        text-decoration: none;
      }
    `;

export default GlobalStyle;
