import React from 'react'
import  "./Header.css"; 
import { Link } from 'react-router-dom';
import { Row , Col  , Container} from 'react-bootstrap'
const Header = () => {
  const Pages = ['Home', 'Socials', 'About']
  return (
    <Container className='header-container'>
            <Row>
               {
                Pages?.map(
                  item=>{
                    return <Col><Link to={`/${item}`} style={{textDecoration:"none" , color:"white", fontSize:"30px"}}>{item}</Link></Col>
                  }
                )
               }
            </Row>


    </Container>
  )
}

export default Header