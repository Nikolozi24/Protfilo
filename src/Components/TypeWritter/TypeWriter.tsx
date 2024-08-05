import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import { Row , Col, Container } from 'react-bootstrap'
const TypeWriter = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{fontSize:"50px" ,
              height:"400px",
              marginTop:"20px",
              background:"#5603AD",
              color:"white",
            fontFamily:"monospace" , borderRight:"2px dotted"}}>
          <TypewriterComponent  

            options={{
              strings:['Hi , My name is <span style="color:#B3E9C7">Nikolozi</span>  i,m <span style="color:#B3E9C7">React developer</span>' , "this is my  portfolio page"],
              autoStart:true,
              loop:true

            }}
          ></TypewriterComponent>
          </Col>
          <Col style={{fontFamily:"monospace" , 
                marginTop:"20px",
            fontSize:"20px", color:"white", background:"#5603AD"}} >
            Education:
            <br></br>
            <div style={{textAlign:"left"}}>
                University:
                <br>
                </br>
                2020-present:  Tbilisi state university , Georgia
               <br/>
                School:
                <br></br>
                
                2002-2020: Dusheti second public school
            </div>
            <hr/>
            <div>
              <br/>
            technologies
            <br>
            </br>

            <div style={{textAlign:"left"}}>

            FrontEnd: Html, css, react-bootstrap, React js, redux , redux toolkit
              , git, github
            <br/>
            Experience with API(REST API), 
            </div>
            </div>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default TypeWriter