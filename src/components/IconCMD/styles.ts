import styled from "styled-components";

export const Container = styled.button`
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