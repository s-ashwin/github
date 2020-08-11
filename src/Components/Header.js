import React, { useState, useContext } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { DiGithubBadge} from "react-icons/di";

const Header = ()=>{
    const context = useContext(Context)

    const[isOpen, setIsOpen] = useState(false)

    const toggle = ()=>{setIsOpen(!isOpen)}

    return(
        <Navbar color="dark" light expand="md">
            <NavbarBrand tag={Link} to="/" className="text-light" style={{marginRight:'16%'}}><DiGithubBadge size={45}></DiGithubBadge></NavbarBrand>
            <NavbarText className="text-light">{ context.user?.email ? context.user.email : ""}</NavbarText>
            <NavbarToggler className="navbar-dark order-first" onClick={toggle} style={{border:'none'}}></NavbarToggler>
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
                            <NavLink tag={Link} to="/" className="text-light">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/signup" className="text-light">SignUp</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/signin" className="text-light">SignIn</NavLink>
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