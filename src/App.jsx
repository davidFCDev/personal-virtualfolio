import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BackButton from './components/BackButton';
import PreLoader from './components/PreLoader';
import Sound from './components/ToggleSound';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showButtonBack, setShowButtonBack] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('#about')
      if (aboutSection && window.scrollY >= aboutSection.offsetTop) {
        setShowButtonBack(true)
      } else {
        setShowButtonBack(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    const timeoutId = setTimeout(() => setIsLoading(false), 1500)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <div className='screen'>
            <div className='screen-gradient'>
                <Navbar />
                <Hero />
                <Sound />
            </div>
          </div>
          <div className='vg-page page-about'>
            {/* {showButtonBack && <BackButton />} */}
            <About />
            <Skills />
          </div>
          <div className='vg-page page-about'>
            <Projects />
          </div>
        </>
      )}
    </div>
  )
}

export default App
