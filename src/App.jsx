import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Routine from './components/Training'
import Stats from './components/Stats'
import Training from './components/Training'
import Whyjoin from './components/Whyjoin'
import RecentEvents from './components/ET'
import ActiveSlider from './components/ActiveSlider'
import Faq from './components/Faq'
import Cta from './components/Cta'
import FadeInOnScroll from './components/Fadein'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="fade-in">

    <Navbar/>
    <Hero/>
    <Stats/>
    <AboutUs/>
    <Training/>
    <Whyjoin/>
    <ActiveSlider/>
    <Faq/>
    <Cta/>

    
    


    </div>
    
    </>
  )
}

export default App
