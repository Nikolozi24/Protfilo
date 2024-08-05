import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container , Row , Col } from 'react-bootstrap';
import { Justify, Linkedin , Github , Instagram } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';
const Social = () => {
  return (
    
      <Container>
      <Row>

        <h1 style={{color:"white" , marginTop:"50px" , marginBottom:"40px"}}>Socials</h1>
      </Row>
            <Row>
                <Col>
                <Card style={{ width: '18rem ', background:"#6D35BA" , height:"300px",display:"flex" ,  alignItems:"center"  , fontFamily:"monospace"}}>
           
            <Linkedin size="50px"/>
      <Card.Body style={{color:"white"}}>
        <Card.Title>
        <br/>Linked in</Card.Title>
        
        <Button variant="info" ><Link to='https://www.linkedin.com/in/nikoloz-tchiabrishvili-6a2798287/' style={{textDecoration:"none" , color:"white"}}>visit profile</Link></Button>
      </Card.Body>
    </Card>
    </Col>
                <Col>
                <Card style={{ width: '18rem ', background:"#6D35BA" , height:"300px",display:"flex" ,  alignItems:"center"  , fontFamily:"monospace"}}>
           
           <Github size="50px"/>
     <Card.Body style={{color:"white"}}>
       <Card.Title>
       <br/>Github</Card.Title>
   
       <Button variant="dark" ><Link to='https://github.com/Nikolozi24' style={{textDecoration:"none" , color:"white"}}>visit profile</Link></Button>
     </Card.Body>
   </Card></Col>
                <Col>
                <Card style={{ width: '18rem ', background:"#6D35BA" , height:"300px",display:"flex" ,  alignItems:"center"  , fontFamily:"monospace"}}>
           
           <Instagram size="50px"/>
     <Card.Body style={{color:"white"}}>
       <Card.Title>
       <br/>Instagram</Card.Title>
       
       <Button variant="success" ><Link to='https://www.instagram.com/nikoloztchiabrishvili/' style={{textDecoration:"none" , color:"white"}}>visit profile</Link></Button>
     </Card.Body>
   </Card></Col>
            </Row>
        </Container>

    
  )
}

export default Social