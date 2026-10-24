import React from 'react'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Get from '../components/Get'
import Best from '../components/Best'
import Categories from '../components/Categories'
import Coming from '../components/Coming'
import Journey from '../components/Journey'
import Level from '../components/Level'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <div className='font-nunito'>
      <Header />
      <Hero />
      <Get />
      <Best />
      <Categories />
      <Coming />
      <Journey />
      <Level />
      <Testimonial />
      <Newsletter />
      <Faq />
    </div>
  )
}

export default Home
