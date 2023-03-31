import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;

  height: 50px;
  width: 100%;
  background-color: #0008;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`

export const Button = styled.button`
  position: relative;

  height: 100%;
  width: 50px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;

  div {
    position: absolute;
    bottom: 0;

    height: 3px;
    width: 100%;
    background: #fff7;
  }

  &:hover {
    background: #0005;
  }

  svg {
    color: #fff;
  }
`