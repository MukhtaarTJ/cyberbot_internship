import React from 'react'
import Body from '../components/ContactComponent/Body/Body'
import Foot from '../components/ContactComponent/Foot/Foot'
import MainNav from "../components/Layout/MainNav/MainNav"

function ContactPage() {
  return (
    <div>
        <MainNav/>
        <Body />
        <Foot />
    </div>
   
  )
}

export default ContactPage