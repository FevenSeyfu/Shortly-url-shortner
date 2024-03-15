import React from 'react'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'

const App = () => {
  return (
    <div>
      <Home />
      <Main />
      <Footer />
      <div className="text-[13px] bg-neutral-very-dark-blue text-center text-white ">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:text-primary-cyan">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/FevenSeyfu" className="hover:text-primary-cyan">
          Feven Seyfu
        </a>
        .
      </div>
    </div>
  )
}

export default App