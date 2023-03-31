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

  body {
    color: #f7f9f9;
    font-family: 'JetBrains Mono', monospace;
  }

  .react-draggable {
    position: absolute;
  }
  
  .actived {
    z-index: 99 !important;
  }
`