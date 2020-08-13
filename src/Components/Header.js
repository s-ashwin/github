import React, { useState, useContext } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { DiGithubBadge} from "react-icons/di";

const Header = ()=>{
    const context = useContext(Context)

    const[isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{setIsOpen(!isOpen)}

    return(
        <Navbar color="dark" light expand="md" style={{zIndex:'5'}}>
            
            
            <NavbarBrand tag={Link} to="/github" className="text-light" ><DiGithubBadge size={45}></DiGithubBadge></NavbarBrand>
           
            <NavbarToggler className="navbar-dark " onClick={toggle} style={{border:'none'}}></NavbarToggler>
            <Collapse navbar isOpen={isOpen}>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                        <NavItem>
                            <NavLink onClick={()=>context.setUser(null)} className="text-light">LogOut</NavLink>
                        </NavItem>
                        ) : (
                        <>
                        <NavItem>
                            <NavLink tag={Link} to="/github" className="text-light"  onClick={toggle}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/signup" className="text-light"  onClick={toggle}>SignUp</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/signin" className="text-light"  onClick={toggle}>SignIn</NavLink>
                        </NavItem>
                        </>
                        )
                    }


                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;