import React, { useContext, useState } from "react";
import { Button, Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import firebase from "firebase/app";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import { Context } from "../Context/Context";
import { DiGithubFull} from "react-icons/di";

const Signup = ()=>{

    const context = useContext(Context)

    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const handleSignup = ()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
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
        return <Redirect to="/"></Redirect>
    }
    else{
        return (
            <div className='text-center bg-dark' style={{width:'100%', height:'100%'}}>
            <Container className='text-center bg-dark'>
                <Row>
                    <Col lg={6} className='offset-lg-3 '>
                    <DiGithubFull size={150} style={{color:'white'}}></DiGithubFull> 
                        <div className='text-center my-4' style={{color:'white'}}>
                        Get started for free — join the millions of developers already using GitHub to share their code, work together, and build amazing things.
                        </div>
                            <Form onSubmit={handleSubmit}>
                               
                                    <FormGroup >
                                        <Label for='email' style={{float:'left', fontWeight:'bold', color:'white'}}>
                                            Email
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
                                        <Label for='password' style={{float:'left', fontWeight:'bold', color:'white'}}>
                                            Password
                                        </Label>
                                        
                                            <Input
                                                type='password'
                                                name='password'
                                                id='password'
                                                placeholder='Create a password '
                                                value={password}
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                       
                                    </FormGroup>
                                
                                
                                    <Button className='mt-4' type='submit' block color='success'>
                                        Sign Up
                                    </Button>
                               
                            </Form>
                       
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Signup;