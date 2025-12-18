import Navbar from '@/common/Navbar'
import AllCards from '@/component/AllCards'
import HeroSection from '@/component/HeroSection'
import PopularDestinations from '@/component/PopularDestinations'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <AllCards/>
      <PopularDestinations/>
    </div>
  )
}

export default page
