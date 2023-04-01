import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: rgb(67,87,166);
    background: linear-gradient(45deg, rgba(67,87,166,1) 0%, rgba(110,189,255,1) 100%);
  }

  body, p, a, button, h1, h2, input {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialised !important;
  }

  textarea {
    color: #fff;
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    -webkit-font-smoothing: antialised !important;
  }

  .react-draggable {
    position: absolute;
  }
  
  .actived {
    z-index: 99 !important;
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #fff1;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #fff1;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: #fff2;
  }
`