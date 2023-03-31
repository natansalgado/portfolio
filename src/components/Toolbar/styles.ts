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
    gap: 50px;
    align-items: center;
    justify-content: center;
    height: 100%;

    button {
      height: 100%;
      width: 50px;
      outline: none;
      border: none;
      background: transparent;
      cursor: pointer;

      &:hover {
        background: #0005;
      }

      svg {
        color: #fff;
      }
    }
  }
`