import React, { Component,useCallback,useContext } from 'react'
import { LandingContext } from '../App'
import About from './about'
import AdonisCarousel from './carousel'
import Contact from './contact'
import NavigationReact from './navigation_react_boot'
import Services from './services'

const LandingPage = ()=>{
    return (
        <div>
        <NavigationReact />
        <AdonisCarousel />
        <About/>
        <Services />
        <Contact/>
        </div>
    )

}

export default LandingPage