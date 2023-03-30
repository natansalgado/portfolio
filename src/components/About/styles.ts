import styled from "styled-components";

interface Props {
  color?: string
  width?: number
  height?: number
}

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  background: rgb(16,88,107);
  background: linear-gradient(45deg, #486C80 0%, #2D4654 100%);
  height: 100vh;
`

export const CMD = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px #fff5 solid;
  background: black;
  width: ${({width}) => `${width}px`} ;
  height: ${({height}) => `${height}px`};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    border-bottom: #fff5 1px solid;
    
    h1 {
      font-size: 14px;
      font-weight: 400;
    }

    div {
      display: flex;
      align-items: center;

      &:first-child {
        padding-left: 10px;
        gap: 10px;
      }
    }
  }
`

export const Button = styled.button<Props>`
  width: 40px;
  height: 30px;
  border: none;
  background-color: #000;
  cursor: pointer;
  color: currentColor;

  &:hover {
    background: ${({ color }) => color};
  }
`

export const Box = styled.textarea`
  padding: 10px;
  height: 100%;
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

export const Icon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 80px;
  width: 100px;
  border: none;
  background: none;
  cursor: pointer;
  color: currentColor;
  
  &:hover {
    background: #0003;
    border: #fff2 1px solid;
  }

  h1 {
    font-weight: 300;
    font-size: 18px;
  }
`

