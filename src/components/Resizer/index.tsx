import { useRef, useEffect } from 'react'
import { Container } from './styles'

interface Props {
  height: number
  width:number
  children: any
}

export const Resizer = ({ children, height, width }: Props) => {
  const refBox = useRef<any>(null)
  const refTop = useRef<HTMLDivElement | null>(null)
  const refRight = useRef<HTMLDivElement | null>(null)
  const refLeft = useRef<HTMLDivElement | null>(null)
  const refBottom = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const resizeableElement = refBox.current
    const styles = window.getComputedStyle(resizeableElement)
    let width = parseInt(styles.width, 10)
    let height = parseInt(styles.height, 10)

    let xCord = 0
    let yCord = 0

    resizeableElement.style.top = '150px'
    resizeableElement.style.left = '150px'

    //TOP
    const onMouseMoveTopResize = (event: any) => {
      const dy = event.clientY - yCord
      height = height - dy
      yCord = event.clientY
      resizeableElement.style.height = `${height}px`
    }

    const onMouseUpTopResize = (event: any) => {
      document.removeEventListener('mousemove', onMouseMoveTopResize)
    }

    const onMouseDownTopResize = (event: any) => {
      yCord = event.clientY
      const styles = window.getComputedStyle(resizeableElement)
      resizeableElement.style.bottom = styles.bottom
      resizeableElement.style.top = null
      document.addEventListener('mousemove', onMouseMoveTopResize)
      document.addEventListener('mouseup', onMouseUpTopResize)
    }

    //RIGHT
    const onMouseMoveRightResize = (event: any) => {
      const dx = event.clientX - xCord
      xCord = event.clientX
      width = width + dx
      resizeableElement.style.width = `${width}px`
    }

    const onMouseUpRightResize = (event: any) => {
      document.removeEventListener('mousemove', onMouseMoveRightResize)
    }

    const onMouseDownRightResize = (event: any) => {
      xCord = event.clientX
      const styles = window.getComputedStyle(resizeableElement)
      resizeableElement.style.left = styles.left
      resizeableElement.style.right = null
      document.addEventListener('mousemove', onMouseMoveRightResize)
      document.addEventListener('mouseup', onMouseUpRightResize)
    }

    //BOTTOM
    const onMouseMoveBottomResize = (event: any) => {
      const dy = event.clientY - yCord
      height = height + dy
      yCord = event.clientY
      resizeableElement.style.height = `${height}px`
    }

    const onMouseUpBottomResize = (event: any) => {
      document.removeEventListener('mousemove', onMouseMoveBottomResize)
    }

    const onMouseDownBottomResize = (event: any) => {
      yCord = event.clientY
      const styles = window.getComputedStyle(resizeableElement)
      resizeableElement.style.top = styles.top
      resizeableElement.style.bottom = null
      document.addEventListener('mousemove', onMouseMoveBottomResize)
      document.addEventListener('mouseup', onMouseUpBottomResize)
    }

    //LEFT
    const onMouseMoveLeftResize = (event: any) => {
      const dx = event.clientX - xCord
      xCord = event.clientX
      width = width - dx
      resizeableElement.style.width = `${width}px`
    }

    const onMouseUpLeftResize = (event: any) => {
      document.removeEventListener('mousemove', onMouseMoveLeftResize)
    }

    const onMouseDownLeftResize = (event: any) => {
      xCord = event.clientX
      const styles = window.getComputedStyle(resizeableElement)
      resizeableElement.style.right = styles.right
      resizeableElement.style.left = null
      document.addEventListener('mousemove', onMouseMoveLeftResize)
      document.addEventListener('mouseup', onMouseUpLeftResize)
    }

    const resizerRight = refRight.current
    resizerRight?.addEventListener('mousedown', onMouseDownRightResize)

    const resizerTop = refTop.current
    resizerTop?.addEventListener('mousedown', onMouseDownTopResize)

    const resizerBottom = refBottom.current
    resizerBottom?.addEventListener('mousedown', onMouseDownBottomResize)

    const resizerLeft = refLeft.current
    resizerLeft?.addEventListener('mousedown', onMouseDownLeftResize)

    return () => {
      resizerRight?.removeEventListener('mousedown', onMouseDownRightResize)
      resizerTop?.removeEventListener('mousedown', onMouseDownTopResize)
      resizerBottom?.removeEventListener('mousedown', onMouseDownBottomResize)
      resizerLeft?.removeEventListener('mousedown', onMouseDownLeftResize)
    }
  }, [])

  return (
    <Container height={height} width={width} ref={refBox} className='resizeable-box'>
      <div ref={refLeft} className="resizer rl"></div>
      <div ref={refTop} className="resizer rt"></div>
      <div ref={refRight} className="resizer rr"></div>
      <div ref={refBottom} className="resizer rb"></div>
      {children}
    </Container >
  )
}