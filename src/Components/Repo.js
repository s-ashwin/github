import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repo = ({url})=>{
    const[repos, setRepos] = useState([])

    const getrepo = async ()=>{
        const{data} = await Axios.get(url);
        setRepos(data);
    }

    useEffect(()=>{
        getrepo()
    },[url])

    return(
        <ListGroup className="mt-2 mb-5">
            <ListGroupItem>
            <h2 class="text-dark">Repositories</h2>
            </ListGroupItem>
            
            {repos.map((repo)=>(
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-secondary">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Repo;