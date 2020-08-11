import React from "react";
import {Card, CardBody} from "reactstrap";

const Usercard = ({user})=>{
    return(
    <Card className="mt-2">
        <img className="img-thumbnail" src={user.avatar_url}></img>
        <CardBody>
            <div className="text-primary">{user.name}</div>
            <div className="text-secondary">{user.bio}</div>
            <div className="text-secondary">Location: {user.location? user.location : "Unspecified"}</div>
            <div className="text-info">{user.hireable ? "Available for Hire" : "Currently Not Available for Hire"}</div>
            
        </CardBody>
    </Card>
    )
}

export default Usercard;