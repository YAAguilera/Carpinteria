import React from 'react'
import Nav from '../Components/Nav'
import Landing from '../Components/Landing'
import Services from '../Components/Services'
import Works from '../Components/Works'
const Home = () => {
  return (
    <main>
     <section className='overflow-x-hidden'>
      <Nav/>
      <Landing/>
      <Services/>
      <Works/>
     </section>
    </main>
  )
}

export default Home