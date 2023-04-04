import styled from "styled-components"

interface Props {
  isDesktop?: boolean
  fullScreen?: boolean
  color?: string
  projectOn?: boolean
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: start;

  background: #111;

  height: ${({ isDesktop, fullScreen }) => isDesktop ? fullScreen ? 'calc(100% - 50px)' : '80vh' : 'calc(100% - 50px)'};
  width: ${({ isDesktop, fullScreen }) => isDesktop ? fullScreen ? '100vw' : '80vw' : '100%'};

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

  &:focus {
    outline: none;
  }

  &::grammar-error {
    text-decoration: none;
  }

  .header {
    height: 50px;
    padding: 10px;
    border-bottom: 1px #fff4 solid;
    
    h1 {
      font-size: 24px;
      font-weight: 300;
      margin-bottom
    }
  }

  .content {
    padding: 10px;
    width: fit-content;

    label{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      padding: 5px;

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
        -webkit-appearance: none;
        -moz-appearance: none;
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

    .button {
      width: 100%;
      text-align: end;
      padding: 5px;
      
      button {
        padding: 10px;
        background: #fff2;
        outline: none;
        border: none;
        font-size: 14px;
        cursor: pointer;
        text-align: center;

        &:hover {
          outline: 2px #fff2 solid;
          outline-offset: -2px;
        }
      }
    }
  }

`