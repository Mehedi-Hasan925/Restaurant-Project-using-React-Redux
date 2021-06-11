import React from 'react'
// Collapse,NavbarToggler,Nav, NavItem,NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,  NavbarText
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

const navbar = ()=>{
    return(
            <div className="">
                <Navbar variant="dark" expand="lg" style={{background:"#152144"}}>
                    <Navbar.Brand href="#home" style={{paddingLeft:"20px"}}>Restaurant</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="text" placeholder="Search" className=" me-2" />
                            <Button type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    )
}

export default navbar;