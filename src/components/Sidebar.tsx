import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
  
export default class Sidebar extends React.Component<any, any>{
    public render(): JSX.Element{
        return(
            <Navbar bg="dark" variant="dark" expand={false}>
                <div className = "logo">
                    <Navbar.Brand href="#home">Tikkitaka</Navbar.Brand>
                </div> 
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Network</Nav.Link>
                    <Nav.Link href="#pricing">Health</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}