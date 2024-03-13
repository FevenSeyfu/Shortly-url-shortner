import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer/Footer'
import ShortnerForm from './components/ShortnerForm'
import AdvancedStatistics from './components/AdvancedStatistics'

const App = () => {
  return (
    <div>
      <Hero />
      <ShortnerForm />
      <AdvancedStatistics />
      <Footer />
    </div>
  )
}

export default App