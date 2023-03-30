import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 15px;
  }

  *::-webkit-scrollbar-track {
    background: #222;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #555;
    border-left: 2px solid #222;
    border-right: 2px solid #222
  }

  html, body, #root {
    height: 100%;
    background: #bed8d4;
  }

  body {
    color: #f7f9f9;
    font-family: 'JetBrains Mono', monospace;
  }

  .App {
    
  }
`