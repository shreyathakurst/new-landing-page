import { useState } from 'react'
import './App.css'
import { NavbarWithMegaMenu } from './Pages/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Gallery from './Pages/Gallery'
import Blog from './Pages/Blog'
import { FooterWithSocialLinks } from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-h4 mx-auto'> <NavbarWithMegaMenu/></div>
     <Home/>
     <Services/>
     <Gallery/>
     {/* <Products/> */}
     <Blog/>
     <FooterWithSocialLinks/>
    </>
  )
}

export default App
