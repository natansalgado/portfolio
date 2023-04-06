import { Container } from './styles'

import { AboutIcon } from '../AboutIcon'
import { ProjectsIcon } from '../ProjectsIcon'
import { ContactIcon } from '../ContactIcon'
import { ConfigsIcon } from '../ConfigsIcon'

import { About } from '../About'
import { Projects } from '../Projects'
import { Contact } from '../Contact'

import { useSelector } from 'react-redux'
import { desktop } from '../../store/desktopSlice'
import { useEffect, useState } from 'react'
import { Configs } from '../Configs'

export const Desktop = () => {
  const { aboutOpen, projectsOpen, contactOpen, configsOpen } = useSelector(desktop)
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })
  const [isDesktop, setIsDesktop] = useState(windowSize.width >= 720 ? true : false)
  const [message, setMessage] = useState(false)
  const [showMessage, setShowMessage] = useState(windowSize.width >= 720 ? true : false)
  const [wallpaper, setWallpaper] = useState(null)

  const handleWallpaper = (wallpaper: any) => {
    setWallpaper(wallpaper)
  }

  useEffect(() => {
    isDesktop && setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 4000)

    setTimeout(() => {
      setShowMessage(false)
    }, 6000)

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      if (window.innerWidth < 720) {
        setIsDesktop(false)
      } else {
        setIsDesktop(true)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      {wallpaper &&
        <img className='wallpaper-img' src={URL.createObjectURL(wallpaper)} alt="" />
      }

      {isDesktop &&
        <>
          <AboutIcon />
          <ProjectsIcon />
          <ContactIcon />
          <ConfigsIcon />
        </>
      }

      {aboutOpen && <About isDesktop={isDesktop} windowSize={windowSize} />}
      {projectsOpen && <Projects isDesktop={isDesktop} windowSize={windowSize} />}
      {contactOpen && <Contact isDesktop={isDesktop} windowSize={windowSize} />}
      {configsOpen && <Configs isDesktop={isDesktop} windowSize={windowSize} setWallpaper={handleWallpaper} />}

      {showMessage &&
        <span className={message ? 'fade-in-element show' : 'fade-in-element'} >PRESSIONE F11 PARA UMA MELHOR EXPERIÊNCIA</span>
      }

    </Container>
  )
}