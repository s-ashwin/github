import React, { useContext, useState } from "react";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import firebase from "firebase/app";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import { Context } from "../Context/Context";
import { DiGithubBadge} from "react-icons/di";

const Signin = ()=>{

    const context = useContext(Context)

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSignup = ()=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            (res)=>{
                console.log(res)
                context.setUser({email: res.user.email, uid:res.user.uid})
            }
            )
            .catch(
                error => {
                    console.log(error)
                    toast(error.message, {type:"error"})
                }
            )
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleSignup();
    }

    if(context.user?.email){
        return <Redirect to="/github"></Redirect>
    }
    else{
        return (
            <Container className='text-center' >
                <Row>
                    <Col lg={6} className='offset-lg-3 ' >
                    <div className='my-4 '>
                                <DiGithubBadge size={75} className='text-dark'></DiGithubBadge>
                                <h3 className='my-2 '> Sign In</h3>
                                </div>
                        <Card>
                            <Form onSubmit={handleSubmit}>
                                
                                <CardBody>
                                    <FormGroup >
                                        <Label for='email' style={{float:'left', fontWeight:'bold'}}>
                                            Email address
                                        </Label>
                                        
                                            <Input
                                           
                                                type='email'
                                                name='email'
                                                id='email'
                                                placeholder='Your email address'
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                            />
                                        
                                    </FormGroup>
                                    <FormGroup >
                                        <Label for='password'style={{float:'left', fontWeight:'bold'}}>
                                            Password
                                        </Label>
                                       
                                            <Input
                                                type='password'
                                                name='password'
                                                id='password'
                                                placeholder='Your password '
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                       
                                    </FormGroup>
                                    <Button className='mt-4' type='submit' block color='success'>
                                        Sign In
                                    </Button>
                                </CardBody>
                               
                                    
                                
                            </Form>
                            
                        </Card>
                        <Card className='my-3'>
                        <CardBody style={{backgroundColor:'#f6f8fa'}}>
                            <div ><div style={{display:'flex',justifyContent:'center'}}><div className='mr-1'>New user?</div> <a href='/signup' className="text-primary">Create an account.</a></div></div>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Signin;