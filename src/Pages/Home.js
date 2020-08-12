import React, { useContext, useState } from "react";
import Axios from "axios";
import { Container, Row, InputGroup, InputGroupAddon, Col, Input, Button } from "reactstrap";
import { FaSistrix } from "react-icons/fa";
import { Context } from "../Context/Context";
import { toast } from "react-toastify";
import Usercard from "../Components/Usercard";
import Repo from "../Components/Repo";
import { GoRepo} from "react-icons/go";


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
            <div>No user</div>
        )
    }
    else{
    return(
        <div className="home">
        <Container >
            <Row className="my-3">
                <Col md="4">
                    <InputGroup>
                        <Input type="text" value={query} onChange={e=> setQuery(e.target.value)} placeholder="Search for user"></Input>
                        <InputGroupAddon addonType="append">
                            <Button onClick={fetchdetail}><FaSistrix></FaSistrix></Button>
                        </InputGroupAddon>
                    </InputGroup>
                    { user ? <Usercard user={user}></Usercard> : null }
                </Col>
                <Col md="8" >
                <p className="text-secondary"><GoRepo className="text-secondary mr-1"></GoRepo>Repositories</p>
                { user ? <Repo url={user.repos_url}></Repo> : null }
                </Col>
            </Row>
        </Container>
        </div>
    )}
}

export default Home;