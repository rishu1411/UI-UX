import Brand from '@/components/Brand'
import CTA from '@/components/CTA'
import Navbar from '@/components/Navbar'
import Blog from '@/contain/Blog'
import Features from '@/contain/Features'
import Footer from '@/contain/Footer'
import Header from '@/contain/Header'
import Possibility from '@/contain/Possibility'
import WhatGpt3 from '@/contain/WhatGpt3'
import React from 'react'

function page() {
  return (
    <div>
      <div className='gradient__bg '>
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer/>
    </div>
  )
}

export default page