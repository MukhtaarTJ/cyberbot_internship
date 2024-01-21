import React from 'react'
import MainNav from '../components/Layout/MainNav/MainNav'
import Header from '../components/AboutComponent/Header/Header'
import Intro from '../components/AboutComponent/Intro/Intro'
import CareerStarter from '../components/AboutComponent/CareerStarter/CareerStarter'
import PathWay from '../components/AboutComponent/PathWay/PathWay'
import Footer from "../components/Layout/Footer/Footer"
import styles from "../components/AboutComponent/StartUps/StartUps"
import StartUps from '../components/AboutComponent/StartUps/StartUps'

const AboutPage = () => {
  return (
    <div>
      <MainNav/>
      <Header/>
      <Intro/>
      <CareerStarter/>
      <PathWay/>
      <StartUps/>
    <Footer/>
    </div>
  )
}

export default AboutPage
