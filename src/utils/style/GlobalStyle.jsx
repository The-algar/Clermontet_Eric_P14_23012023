import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export const GlobalStyle = createGlobalStyle`
/* Styles principaux */
* {
    font-family: 'Roboto', Helvetica, sans-serif;
    color: ${colors.text};
    font-size: 16px;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
}
  body {
    background-color: ${colors.background};
    // max-width: 1440px;
    // height: 100%;
    // overflow-y: hidden;
    width: 100vw;
    margin: auto;
    // padding: 0 7%;
    line-height: 1;
  }
  img {
    // width: 100%;
    object-fit: cover;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  .sr-only {
    position:absolute;
    width:1px;
    height:1px;
    padding:0;
    margin:-1px;
    overflow:hidden;
    clip:rect(0,0,0,0);
    white-space:nowrap;
    border:0
  }
  .main {
    display: flex;
    flex-direction: column;

  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  `