import React from 'react'
import Nav from '../Components/Nav'
import Landing from '../Components/Landing'
import Services from '../Components/Services'
import Works from '../Components/Works.jsx'
import Contact from '../Components/Contact'
const Home = () => {
  return (
    <main>
     <section className='overflow-x-hidden'>
      <Nav/>
      <Landing/>
      <Services/>
      <Works/>
      <Contact/>
     </section>
    </main>
  )
}

export default Home