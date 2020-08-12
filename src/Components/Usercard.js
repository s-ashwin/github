import React from "react";
import { GoLocation} from "react-icons/go";
import { BsPeople} from "react-icons/bs";
import { FiLink} from "react-icons/fi";

const Usercard = ({user})=>{
    return(
    <div className="mt-2 profile">
        <div className=" img">
        <img className="rounded-circle img" src={user.avatar_url} alt={user.avatar_url}></img>
        </div>
        <div className=" info">
            <div className="name">{user.name}</div>
            <div className="text-secondary uname">{user.login}</div>
          
        </div>
        <div className=" abt">
            <div className="text-secondary bio">{user.bio}</div>
            <div className="text-secondary loc"><GoLocation></GoLocation> {user.location? user.location : "Unspecified"}</div>
            
            {user.blog?(<div className="text-secondary blog"><FiLink></FiLink> {user.blog}</div>):(<div></div>)}
            
            <div className="text-secondary count"><BsPeople></BsPeople> {user.followers} followers {user.following} following</div>
        </div> 
    </div>
    )
}

export default Usercard;