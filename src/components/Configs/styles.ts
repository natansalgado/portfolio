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

  background: #111;

  height: ${({ isDesktop, fullScreen }) => isDesktop ? fullScreen ? 'calc(100% - 50px)' : '80vh' : 'calc(100% - 50px)'};
  width: ${({ isDesktop, fullScreen }) => isDesktop ? fullScreen ? '100%' : '80vw' : '100%'};

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    
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

export const Box = styled.div`
  height: 100%;
  background: #1a1a1a;

  .header-2 {
    height: 50px;
    padding: 10px;
    
    h1 {
      font-size: 24px;
      font-weight: 300;
    }
  }

  .content {
    width: 100%;

    label {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 20px;
      border-bottom: 1px #fff1 solid;

      padding: 15px 5px;

      p {
        font-size: 14px;
      }
    }

    .wallpaper {
      input[type='file'] {
        display: none;
      }

      div {
        font-size: 14px;
        padding: 10px;
        width: fit-content;
        background: #fff2;

        cursor: pointer;

        &:hover {
          outline: 2px #fff2 solid;
          outline-offset: -2px;
        }
      }
    }

    .color {
      input[type='color'] {
        height: 40px;
        width: 40px;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;

        &::-webkit-color-swatch {
          border: transparent;

          &:hover {
            border: 2px #fff3 solid;
          } 
        }

      }
    }
  }
`