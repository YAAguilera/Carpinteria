import React from 'react'
import Nav from '../Components/Nav'
import Landing from '../Components/Landing'
import Services from '../Components/Services'
import Works from '../Components/Works'
import Pyr from '../Components/Contact'
const Home = () => {
  return (
    <main>
     <section className='overflow-x-hidden'> 
      <Nav/>
      <Landing/> 
      <Services/>
      <Works/>
      <Pyr/>
     </section>
    </main>
  )
}

export default Home