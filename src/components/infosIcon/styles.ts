import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100px;
  width: 100px;
  border: none;
  background: none;
  cursor: pointer;
  color: currentColor;
  
  &:hover {
    background: #0003;
    border: #fff2 1px solid;
  }

  svg {
    margin-bottom: 5px;
  }

  h1 {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 15px
  }
`