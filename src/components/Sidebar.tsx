import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

  
export default class Sidebar extends React.Component<any, any>{
    public render(): JSX.Element{
        return(
            
            <div>
           

            <style type="text/css">
                {`
                .navbar-dark .navbar-brand {
                    color: #0affc3;
                }
               
            `}
            </style>


            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">TIKITAKA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="">HOME</Nav.Link>
                        <Nav.Link href="">NETWORK</Nav.Link>
                        <Nav.Link href="">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="">Dank memes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}