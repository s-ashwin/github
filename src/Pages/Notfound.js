import React from "react";
import { Container } from "reactstrap";
import { DiGithubBadge} from "react-icons/di";

const Notfound = ()=>{
    return(
        <Container className="text-center">
            <p style={{fontSize:100, fontWeight:'100'}} className='text-dark'>404</p>
            <p style={{ fontWeight:'900'}} className='text-dark'>File not found</p>
            <p style={{ fontWeight:'100'}} className='text-dark'>The site configured at this address does not contain the requested file.</p>
            <DiGithubBadge size={45} className='text-dark' ></DiGithubBadge>
        </Container>
    )
}
export default Notfound;