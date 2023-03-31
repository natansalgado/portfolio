import styled from "styled-components"

interface Props {
  resize?: boolean
  color?: string
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: start;

  border: 1px #fff5 solid;
  background: black;

  min-height: 200px;
  min-width: 270px;

  height: ${({resize}) => resize ? '100%' : '80vh'};
  width: ${({resize}) => resize ? '100%' : '80vw'};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    
    border-bottom: #fff5 1px solid;
    
    div {
      display: flex;
      align-items: center;
      height: 100%;
      
      &:first-child {
        width: 100%;
        height: 100%;
        padding-left: 10px;
        gap: 10px;
      }

      h1 {
        font-size: 14px;
        font-weight: 400;
        cursor: default;
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

  &:active {
    filter: brightness(1.2);
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