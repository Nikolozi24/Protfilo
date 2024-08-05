import Header from '../Components/Header/Header.tsx'
import React from 'react'
import TypeWriter from '../Components/TypeWritter/TypeWriter.tsx'
import { Container , Row , Col } from 'react-bootstrap'
import Social from '../Components/Social/Social.tsx'
import About from '../Components/About/About.tsx'
// 
//    colors in use 
// 5603AD 8367C7  9BA8C7  B3E9C7  BBF1C9  C2F8CB F0FFF1
//  
// 
const Main = () => {
  return (
   <Container>
          <Row> <Header/></Row>
          <Row> <TypeWriter/></Row>
          <Row> <Social/></Row>
          <Row> <About/></Row>
       
   </Container>
      
     
  )
}

export default Main