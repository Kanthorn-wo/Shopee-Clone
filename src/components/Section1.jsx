import React from 'react'
import TopNav from './topnav/TopNav'
import SlideImg from './topnav/SlideImg'
import Product from './main-content/Product'
import styled from 'styled-components'
import Footer from './footer/Footer'

const Section1 = () => {
  return (
    <>
      <TopNav />
      <SlideImg />
      <Product />
      <Footer />
    </>
  )
}

export default Section1

