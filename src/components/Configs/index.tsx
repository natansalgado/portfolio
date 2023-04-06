import { ChangeEvent, useEffect, useState } from 'react'
import { Container, Button, Box } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { TiTabsOutline } from 'react-icons/ti'
import { MdCropSquare } from 'react-icons/md'

import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'

import { useDispatch, useSelector } from 'react-redux'
import { desktop, closeConfigs, activeConfigs, changeTaskbarColor } from '../../store/desktopSlice'


interface Props {
  isDesktop: boolean
  windowSize: { width: number, height: number }
  setWallpaper: (wallpaper: any) => void
}

export const Configs = ({ isDesktop, windowSize, setWallpaper }: Props) => {
  const [windowHeight, setWindowHeight] = useState(windowSize.height)
  const [windowWidth, setWindowWidth] = useState(windowSize.width)

  const { actived } = useSelector(desktop)

  const dispatch = useDispatch()

  const [fullScreen, setFullScreen] = useState(false)
  const [position, setPosition] = useState({
    x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
    y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 25 : 0
  })

  const [color, setColor] = useState('#000000')
  const [canChange, setCanChange] = useState(true)

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
    if (canChange) {
      setCanChange(false)
      dispatch(changeTaskbarColor(e.target.value))
      setTimeout(() => {
        setCanChange(true)
      }, 100)
    }
  }

  const handleWallpaper = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    setWallpaper(selectedFile)
  }

  const handleClose = () => {
    dispatch(closeConfigs())
  }

  const handleActived = () => {
    dispatch(activeConfigs())
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
    if (!fullScreen) {
      setPosition({ x: 0, y: 0 })
    } else {
      setPosition({
        x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
        y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 25 : 0
      })
    }
  }

  const handleOnStop = (e: DraggableEvent, data: DraggableData) => {
    if (!fullScreen) {
      setPosition({ x: data.x, y: data.y })
    }
  }

  useEffect(() => {
    setWindowHeight(windowSize.height)
    setWindowWidth(windowSize.width)
    !fullScreen && setPosition({
      x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
      y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 50 : 0
    })
  }, [windowSize])

  return (
    <Draggable
      axis="both"
      handle=".handle"
      scale={1}
      bounds={isDesktop ? fullScreen ?
        { left: 0, top: 0, right: 0, bottom: 0 }
        :
        { left: 0, top: 0, right: windowWidth - ((80 / 100) * windowWidth), bottom: (windowHeight - ((80 / 100) * windowHeight)) - 50 }
        :
        { left: 0, top: 0, right: 0, bottom: 0 }
      }
      onStart={handleActived}
      onStop={handleOnStop}
      position={isDesktop ? position : { x: 0, y: 0 }}
    >
      <Container onClick={handleActived} fullScreen={fullScreen} isDesktop={isDesktop} className={actived === 'configs' ? 'actived' : ''}>
        <div className='header' >
          <div className='handle' />
          <div>
            {isDesktop &&
              <>
                <Button onClick={handleClose} color='#fff1'>
                  <IoRemoveOutline size={20} />
                </Button>
                <Button onClick={handleFullScreen} color='#fff1'>
                  {fullScreen ?
                    <TiTabsOutline size={16} />
                    :
                    <MdCropSquare size={16} />
                  }
                </Button>
              </>
            }
            <Button onClick={handleClose} color='#900'>
              <IoCloseOutline size={20} />
            </Button>
          </div>
        </div >
        <Box >
          <div className='header'>
            <h1>CONFIGURAÇÕES</h1>
          </div>
          <div className='content'>
            <label className='wallpaper'>
              <p>PAPEL DE PAREDE</p>
              <input type="file" accept='.jpg, jpeg, .png' onChange={handleWallpaper} />
              <div>ESCOLHER</div>
            </label>
            <label className='color'>
              <p>COR DA BARRA DE TAREFAS</p>
              <input type='color' value={color} onChange={handleChangeColor} />
            </label>
          </div>
        </Box>
      </Container >
    </Draggable>
  )
}
