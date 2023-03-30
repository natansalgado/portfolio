import { Container } from './styles'
import { CMD } from '../CMD'
import { IconCMD } from '../IconCMD'

import ReactFlow, { Node, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css'

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
const height = 0
const width = 0

console.log(windowWidth)

const NODE_TYPES = {
  cmd: CMD
}

const CMDNode = [{
  id: 'cmd',
  type: 'cmd',
  dragHandle: '.draghandle',
  position: {
    x: (windowWidth - ((80 / 100) * windowWidth)) / 2,
    y: (windowHeight - ((80 / 100) * windowHeight)) / 2
  },
  data: {},
}]

const proOptions = { hideAttribution: true };

export const About = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(CMDNode)

  return (
    <Container id='about'>
      <ReactFlow
        zoomOnDoubleClick={false}
        zoomOnScroll={false}
        panOnDrag={false}
        nodeTypes={NODE_TYPES}
        nodes={nodes}
        onNodesChange={onNodesChange}
        proOptions={proOptions}
      >
      </ReactFlow>
    </Container>
  )
}