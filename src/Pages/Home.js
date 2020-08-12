import React, { useContext, useState } from "react";
import Axios from "axios";
import { Container, Row, InputGroup, InputGroupAddon, Col, Input, Button } from "reactstrap";
import { FaSistrix } from "react-icons/fa";
import { Context } from "../Context/Context";
import { toast } from "react-toastify";
import Usercard from "../Components/Usercard";
import Repo from "../Components/Repo";
import { GoRepo, GoLogoGithub} from "react-icons/go";


const Home = ()=>{

    const context = useContext(Context)
    const[query, setQuery] = useState('')
    const[user,setUser] = useState(null)

    const fetchdetail = async ()=>{
        try {
            const {data} = await Axios.get(`https://api.github.com/users/${query}`)
            setUser(data)
            console.log({data})
        } catch (error) {
            toast("No user found", {type:"error"})
        }
    }
    if(!context.user?.uid){
        return(
            <div className="defaulthome">
                <div className="hero">
                    <Container>
                        <Row>
                            <Col md='6' className="intro">
                                <h1>Built for developers</h1>
                                <p>GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 50 million developers.</p>
                            </Col>
                            <Col md='6' className="auth">
                                <GoLogoGithub size={100}></GoLogoGithub>
                            <div className=""> <p>If you are an existing user</p> <Button onClick={event =>  window.location.href='/signin'} className="my-2 btn-success">Sign In</Button> <p>Or, Create a New Account</p> <Button onClick={event =>  window.location.href='/signup'} className="my-2 btn-success"> Sign Up</Button>  </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="herotwo">
                    <Container>
                        <h1>GitHub Clone App</h1>
                        <p>Create an account, Search your friends on GitHub</p>
                        <p>(As of now, this app allows you only to search for profiles on github and view their repositories)</p>
                    </Container>
                </div>
            </div>
        )
    }
    else{
    return(
        <div className="home">
        <Container >
            <Row className="my-3">
                <Col md="3">
                    <InputGroup>
                        <Input type="text" value={query} onChange={e=> setQuery(e.target.value)} placeholder="Search for user"></Input>
                        <InputGroupAddon addonType="append">
                            <Button onClick={fetchdetail}><FaSistrix></FaSistrix></Button>
                        </InputGroupAddon>
                    </InputGroup>
                    { user ? <Usercard user={user}></Usercard> : null }
                </Col>
                <Col md="9" >
                <p className="text-secondary"><GoRepo className="text-secondary mr-1"></GoRepo>Repositories</p>
                { user ? <Repo url={user.repos_url}></Repo> : null }
                </Col>
            </Row>
        </Container>
        </div>
    )}
}

export default Home;