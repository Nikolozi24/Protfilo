import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
const About = () => {
  return (
   <Container>
    <Row><h1 style={{color:"white" , margin:"40px 0px", fontFamily:"monospace"}}>About</h1></Row>
    <Row>
        <Col><h4 style={{color:"white"}}>Work experience:  i do my own projects, that's my experience </h4></Col>
    </Row>
   </Container>
  )
}

export default About