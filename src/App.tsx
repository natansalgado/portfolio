import GlobalStyle from './styles/global'
import { Taskbar } from './components/Taskbar'
import { Desktop } from './components/Desktop'

function App() {


  return (
    <div className="App">
      <Desktop />
      <Taskbar />
      <GlobalStyle />
    </div>
  )
}

export default App
