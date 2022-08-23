import React from 'react'
import { Footer } from '../components/Footer/Footer'
import Header from '../components/header/Header'
import BodyContainer from '../container/bodyContainer/BodyContainer'

const Homepage = () => {
  return (
    <div>
          <Header />
      <BodyContainer />
      <Footer />
    </div>
  )
}

export default Homepage