import type { ReactElement } from 'react'
import Header from './pages/layouts/Header'
import Footer from './pages/layouts/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Experience from './pages/experience/Experience'
import SideBar from './pages/layouts/SideBar'

const App = (): ReactElement => {

  return (
    <div className='bg-gray-800 scroll-smooth'>
      <Header />
      <Home />
      <SideBar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
