import type { ReactElement } from 'react'
import Header from './pages/layouts/Header'
import Footer from './pages/layouts/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'

const App = (): ReactElement => {

  return (
    <div className=''>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
