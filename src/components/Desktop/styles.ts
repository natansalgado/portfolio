import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  height: 100vh;
  overflow: hidden;

  span {
    font-size: 20px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .fade-in-element {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .fade-in-element.show {
    opacity: 1;
  }
`