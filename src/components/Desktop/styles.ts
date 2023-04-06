import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .wallpaper-img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  span {
    font-size: 20px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    background: #000a;
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
  }

  .fade-in-element {
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
  }

  .fade-in-element.show {
    opacity: 1;
  }
`