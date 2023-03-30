import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;

  height: 60px;
  width: 100%;
  background-color: #000;
  border-bottom: 1px #555 solid;

  nav {
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    height: 100%;

    a {
      text-decoration: none;
      color: currentColor;
      transition: transform .3s linear, text-shadow .5s linear;
      font-size: 20px;

      &:hover {
        transform: scale(1.2);
        text-shadow: 0 0 5px #fff;
      }
    }
  }
`