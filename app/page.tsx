import Achive from '@/components/Achive'
import Achive2 from '@/components/Achive2'
import Category from '@/components/Category'
import Courses from '@/components/Courses'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import TrustedCompan from '@/components/TrustedCompan'
import React from 'react'

export default function Home() {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <TrustedCompan />
      <Category />
      <Achive />
      <Achive2 />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  )
}
