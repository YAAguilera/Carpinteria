import React from 'react'
import Nav from '../Components/Nav'
import Landing from '../Components/Landing'
import Services from '../Components/Services'
const Home = () => {
  return (
    <main>
     <section className='overflow-x-hidden'>
      <Nav/>
      <Landing/>
      {/* <Services/> */}
     </section>
    </main>
  )
}

export default Home