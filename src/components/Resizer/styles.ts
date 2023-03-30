import styled from "styled-components";

interface Props {
  height: number
  width: number
}

export const Container = styled.div<Props>`
  position: absolute;
  background: black;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  max-width: 1500px;
  max-height: 1500px;
  
  .resizer {
    position: absolute;
  }
  
  .rr {
  cursor: w-resize;
  height: 100%;
  right: 0;
  top: 0;
  width: 5px;
}

.rl {
  cursor: e-resize;
  height: 100%;
  left: 0;
  top: 0;
  width: 5px;
}

.rt {
  cursor: n-resize;
  width: 100%;
  left: 0;
  top: 0;
  height: 5px;
}

.rb {
  cursor: s-resize;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 5px;
}
`