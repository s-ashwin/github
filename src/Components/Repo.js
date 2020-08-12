import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, CardBody } from "reactstrap";
import { GoRepo, GoPrimitiveDot} from "react-icons/go";

const Repo = ({url})=>{
    const[repos, setRepos] = useState([])

    useEffect(()=>{
        const getrepo = async ()=>{
            const{data} = await Axios.get(url);
            setRepos(data);
        }
        getrepo()
    },[url])

    return(
        
            <div className="repos">
           
            {repos.map((repo)=>(

                <Card className="m-2 repo-item"  key={repo.id}>
                   <CardBody>
                    <div className="text-primary"><GoRepo className="text-secondary mr-1"></GoRepo>{repo.name}</div>
                    <h5 className="text-secondary">{repo.description}</h5>
                    {repo.language? (<h6 className="text-secondary">
                        {repo.language==="JavaScript"?<GoPrimitiveDot size={20} style={{ fill: '#f1e05a' }}></GoPrimitiveDot> : repo.language==="HTML"?<GoPrimitiveDot size={20} style={{ fill: '#e34c26' }}></GoPrimitiveDot> : repo.language==="CSS"?<GoPrimitiveDot size={20} style={{ fill: '#563d7c' }}></GoPrimitiveDot>: repo.language==="PHP"?<GoPrimitiveDot size={20} style={{ fill: '#4f5d95' }}></GoPrimitiveDot> :<GoPrimitiveDot size={20} ></GoPrimitiveDot>}                  
                        {repo.language}
                    </h6>) : (<div></div>)}
                    </CardBody>
                 </Card>
            ))}
            </div>
       
    )
}

export default Repo;