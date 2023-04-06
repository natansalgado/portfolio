import styled from "styled-components"

interface Props {
  isDesktop?: boolean
  fullScreen?: boolean
  color?: string
  projectOn?: boolean
}

export const Container = styled.div<Props>`
  height: ${({ isDesktop, fullScreen }) => isDesktop ? fullScreen ? 'calc(100% - 80px)' : '80vh' : 'calc(100% - 80px)'};
  width: ${({ isDesktop, fullScreen }) => isDesktop ? fullScreen ? '100%' : '80vw' : '100%'};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 30px;

    background: #1e2124;
    
    div {
      display: flex;
      align-items: center;
      height: 30px;
    }

    .handle {
      width: 100%;
      cursor: grab;
    }
  }
`

export const Button = styled.button<Props>`
  width: 40px;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background: ${({ color }) => color};
  }
`

export const Box = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #000;
  
  &::-webkit-scrollbar {
    width: 15px;
    cursor: default;
  }

  &::-webkit-scrollbar-track {
    background: #222;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-left: 2px solid #222;
    border-right: 2px solid #222;
  }

  &:focus {
    outline: none;
  }

  &::grammar-error {
    text-decoration: none;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  background: #282b30;
  height: 100%;
  width: 200px;

  @media (max-width: 600px) {
    width: 100px;
  }

  
  .column-items {
    padding: 5px;
    overflow: auto;
    height: 100%;
  }

  .header {
    background: transparent;
    padding: 15px;
    border-bottom: 1px solid #0004;
    height: 50px;

    @media (max-width: 600px) {
      padding: 15px 5px;
      height: 50px;
    }

    @media (max-width: 500px) {
      padding: 15px 5px;
      height: 50px;
      text-align: center;
    }
    
    h1 {
      font-weight: 500;
      font-size: 16px;
      text-transform: uppercase;
      width: 100%;

      @media (max-width: 600px) {
        font-size: 14px;
        line-height: 20px
      }

      @media (max-width: 500px) {
        font-size: 12px;
        line-height: 20px
      }
    }
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background: #36393e;
  width: 100%;
  overflow: hidden;
  
  .header {
    background: transparent;
    padding: 15px;
    border-bottom: 1px solid #0004;
    height: 50px;
    
    h1 {
      font-weight: 500;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
  
  .body {
    display: flex;
    flex-direction: column;

    padding: 10px 30px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-width: 600px) {
      padding: 10px 5px
    }

    img {
      max-width: 530px;
      width: 100%;
      border-radius: 5px;
      margin-top: 10px;
      margin-right: 10px;
    }

    p {
      margin-top: 10px;
    }
    
    ul {
      display: flex;
      gap: 5px;
      margin-bottom: 10px;
      flex-wrap: wrap;
      margin-top: 10px;
      
      li {
        list-style: none;
        background: #008090;
        padding: 4px 8px;
        border-radius: 6px;
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 1px;
      }
    }

    a {
      text-decoration: none;
    }
    
    .buttons {
      display: flex;
      align-items: center;
      gap: 5px;

      margin-top: 10px;
      flex-wrap: wrap;
    
      button {
        display: flex;
        align-items: center;
        gap: 5px;
        background: #000;
        padding: 10px 15px;
        border-radius: 8px;
        outline: none;
        border: none;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 1px;
        
        &:hover {
          filter: brightness(1.2);
        }
      }

      .second-button {
        background: #06f;
      }
    }

    .section {
      border-bottom: 1px #fff2 solid;
      line-height: 30px;
      font-size: 14px;
      text-transform: uppercase;
      
      &:not(.first){
        margin-top: 40px;
      }
    }
  }
  `

export const Project = styled.button<Props>`
    padding: 5px;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    background: transparent;
    border: none;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    @media (max-width: 500px) {
      padding: 5px 0;
    }

    .image {
      position: relative;
      height: 40px;
      width: 40px;

      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        object-fit: cover;
      }

      .circle {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0;
        right: 0;
        background: ${({ projectOn }) => projectOn ? '#0a0' : '#99aab5'};
        border-radius: 50%;
        height: 16px;
        width: 16px;
        border: 3px solid #282b30;
       
        .small-circle {
          position: static;
          height: 5px;
          width: 5px;
          background: #36393e;
          border-radius: 50%;
        }
      }
    }

    p {
      color: #99aab5;
    }

    &:hover {
      background: #fff1;
    }
`

export const Footer = styled.div`
  height: 50px;
  background: transparent;
  padding: 0 30px 0 10px;
  margin-bottom: 10px;

  @media (max-width: 600px) {
      padding: 10px 10px 10px 5px;
    }

  input {
    height: 40px;
    width: 100%;
    background: #36393e;
    filter: brightness(1.3);
    border: none;
    outline: none;
    padding: 0 15px;
    border-radius: 10px;
    font-weight: 300;
    font-size: 16px
  }
`