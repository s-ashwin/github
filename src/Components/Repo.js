import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem, Card, CardBody } from "reactstrap";
import { GoRepo, GoPrimitiveDot} from "react-icons/go";

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
        
            <div className="repos">
           
            {repos.map((repo)=>(

                <Card className="m-2 repo-item"  key={repo.id}>
                   <CardBody>
                    <div className="text-primary"><GoRepo className="text-secondary mr-1"></GoRepo>{repo.name}</div>
                    <h5 className="text-secondary">{repo.description}</h5>
                    <h6 className="text-secondary">{<GoPrimitiveDot></GoPrimitiveDot>}{repo.language}</h6>
                    </CardBody>
                 </Card>
            ))}
            </div>
       
    )
}

export default Repo;