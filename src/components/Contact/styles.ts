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

  background: #075e54;

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
      
      h1 {
        font-size: 14px;
        font-weight: 400;
      }
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

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  background: #ece5dd;
  overflow: hidden;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  height: 60px;
  background: #0f7a6e;
  box-shadow: 0 0 5px 1px #0008;
  padding: 10px 20px;

  img {
    height: 100%;
    border-radius: 50%;
  }

  .status {

    h1 {
      font-size: 18px;
      font-weight: 400;
    }

    p {
      font-size: 14px;
      color: #fffa;
      font-weight: 300;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  padding: 20px 30px 10px;

  @media (max-width: 600px) {
    padding: 20px 15px 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0002;
  }

  .my-message {
    position: relative;
    background: #fff;
    width: fit-content;
    max-width: 600px;
    padding: 10px;
    border-radius: 0 8px 8px 8px;
    box-shadow: 0 1px 5px #0002;
    margin-right: 20px;
    white-space: normal;

    color: #000;
    font-weight: 400;
    line-height: 20px;

    .point {
      position: absolute;
      background: #fff;
      height: 10px;
      width: 10px;
      top: 0;
      left: -10px;

      clip-path: polygon(0 0, 100% 100%, 100% 0);
    }

    a {
      text-decoration: none;
    }

    .buttons {
      display: flex;
      gap: 10px;

      flex-wrap: wrap;

      button {
        display: flex;
        align-items: center;
        gap: 5px;

        margin-top: 5px;
        padding: 8px 10px;
        border: none;
        outline: none;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 1px;
        background: #0e76a8;
        border-radius: 6px;
        cursor: pointer;

        &.git {
          background: #000;
        }

        &:hover {
          filter: brightness(1.2);
        }
      }
    }
  }

  .user-message-div {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    width: 100%;
    
    .user-message {
      position: relative;
      background: #dcf8c6;
      width: fit-content;
      max-width: 600px;
      padding: 10px;
      border-radius: 8px 0 8px 8px;
      box-shadow: 0 1px 5px #0002;
      white-space: normal;
      margin-left: 20px;
      
      flex-wrap: wrap;
      color: #000;
      font-weight: 400;
      line-height: 20px;
      
      .point {
        position: absolute;
        background: #dcf8c6;
        height: 10px;
        width: 10px;
        top: 0;
        right: -10px;
        
        clip-path: polygon(0 0, 0 100%, 100% 0);
      }
    }
  }
`

export const Footer = styled.div`
  height: 60px;
  padding: 5px 10px;
  text-align: center;
  background: #0002;

  input {
    height: 100%;
    width: 100%;
    max-width: 600px;

    outline: none;
    border: none;
    padding: 5px 15px;
    color: #000;
    border-radius: 12px;

    font-size: 100%;
  }
`