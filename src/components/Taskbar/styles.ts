import styled from 'styled-components'

interface Props {
  taskbarColor: string | null
}

export const Container = styled.div<Props>`
  position: fixed;
  z-index: 1;
  bottom: 0;

  height: 50px;
  width: 100%;
  background-color: ${({ taskbarColor }) => taskbarColor ? taskbarColor + '80' : '#0008'};

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

  .is-open {
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