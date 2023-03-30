import { useEffect, useState } from 'react'
import { Container, Button, Box } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { VscTerminalCmd } from 'react-icons/vsc'
import { TiTabsOutline } from 'react-icons/ti'

import { NodeResizer } from 'reactflow'

import { useDispatch } from 'react-redux'
import { handleOpen } from '../../store/aboutSlice'

import '@reactflow/node-resizer/dist/style.css'

export const CMD = () => {
  const defaultText = 'aaaaaaaaa aaaaaaaaaaaaaa'
  const dispatch = useDispatch()

  const [resize, setResize] = useState(false)
  const [text, setText] = useState('')

  const write = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1))
      setTimeout(() => write(text, i + 1), 70)
    }
  }

  const open = () => {
    dispatch(handleOpen())
  }

  useEffect(() => {
    setTimeout(() => write(defaultText), 1000)
  }, [])

  return (
    <Container resize={resize}>
      <NodeResizer
        onResize={() => setResize(true)}
        minWidth={270}
        minHeight={200}
        maxWidth={1350}
        maxHeight={800}
        isVisible={true}
        lineStyle={{ border: '5px transparent solid' }
        }
        handleStyle={{ height: '5px', width: '5px', border: 'none', background: 'transparent' }}
      />
      < header >
        <div className='draghandle'>
          <VscTerminalCmd size={16} />
          <h1>sobre mim.cmd</h1>
        </div>
        <div>
          <Button onClick={open} color='#900'>
            <IoCloseOutline size={20} />
          </Button>
        </div>
      </header >
      <Box spellCheck='false' autoFocus value={text} onChange={e => setText(e.target.value)} />
    </Container >
  )
}