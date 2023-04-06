import styled from "styled-components"

interface Props {
  isDesktop?: boolean
  fullScreen?: boolean
  color?: string
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: start;

  border: 1px #fff5 solid;
  background: black;

  height: ${({ isDesktop, fullScreen }) => isDesktop ? fullScreen ? 'calc(100% - 50px)' : '80vh' : 'calc(100% - 50px)'};
  width: ${({ isDesktop, fullScreen }) => isDesktop ? fullScreen ? '100%' : '80vw' : '100%'};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    
    border-bottom: #fff5 1px solid;
    
    div {
      display: flex;
      align-items: center;
      height: 100%; 
    }

    .handle {
      width: 100%;
      height: 100%;
      padding-left: 10px;
      gap: 10px;
      cursor: grab;
      
      h1 {
        font-size: 14px;
        font-weight: 400;
      }
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
  color: currentColor;

  &:hover {
    background: ${({ color }) => color};
  }
`

export const Box = styled.textarea`
  padding: 10px;
  height: 100%;
  min-height: 169px;
  background: #000;
  color: currentColor;
  font-size: 20px;
  resize: none;
  outline: none;
  border: none;

  &:focus {
    outline: none;
  }

  &::grammar-error {
    text-decoration: none;
  }
`