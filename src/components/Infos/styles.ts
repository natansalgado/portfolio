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
  overflow-y: auto;

  .header-2 {
    padding: 20px 10px;

    p {
      font-size: 20px;
      font-weight: 300;
    }
  }

  .content {
    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      
      margin-bottom: 25px;
      font-weight: 300;
      
      p {
        width: 100%;
        padding: 5px 10px;
        font-size: 14px;
        border-bottom: 1px #fff1 solid;
      }

      ul {
        li {
          font-size: 12px;
          font-weight: 300;
          margin-left: 30px;
          margin-top: 5px;

          list-style-type: square;
        }
      }

      .tecnologies {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        flex-wrap: wrap;

        padding: 0 10px;

        p {
          padding: 5px 0;
          border-bottom: none;
          font-size: 12px;
          width: max-content;
        }

        span {
          font-size: 14px;
          background: #005588;
          width: fit-content;
          padding: 2px 5px;
          border-radius: 5px;
          font-weight: 500;
        }
      }
    }
  }
`