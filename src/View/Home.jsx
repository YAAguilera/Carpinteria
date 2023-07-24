import React from 'react'
import Nav from '../Components/Nav'
import Landing from '../Components/Landing'
import Services from '../Components/Services'
<<<<<<< HEAD
import Works from '../Components/Works.jsx'
import Contact from '../Components/Contact'
=======
import Works from '../Components/Works'
import Pyr from '../Components/Contact'
>>>>>>> main
const Home = () => {
  return (
    <main>
     <section className='overflow-x-hidden'>
      <Nav/>
      <Landing/>
      <Services/>
      <Works/>
<<<<<<< HEAD
      <Contact/>
=======
      <Pyr/>
>>>>>>> main
     </section>
    </main>
  )
}

export default Home