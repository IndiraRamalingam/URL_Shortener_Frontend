import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from "../../services/instance";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp() {
  
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[cpassword,setCPassword]=useState('');
const[msg,setMsg]=useState('');
const[info,setInfo]=useState('');
const[infor,setInfor]=useState('');


const handleSignup =(event) =>{
  event.preventDefault(); 
  if(password == cpassword)
  {
    signup({name,email,password})
  } 
}

const signup =async({name,email,password}) =>{
  if(email!="" && password!="" && name!=""){
    try
    {
      console.log(name,email)
        const response = await instance.authInstance.post('/users/signup',{name,email,password});
        setInfo(`Hi ${name}!! Your account activation link has been sent through Email. Please check your Inbox/Spam !!  `)
        setMsg('')
    }
    catch(error)
    {
      console.log(error)
        setMsg("Username/Email already exists")
    }
  }
  else{
    if(email=="" && password=="" && name==""){
          setMsg("Please fill the details above")
        }else if(email=="" && password==""){
          setMsg("Please enter your Email and Password")
        }else if(email=="" && name==""){
          setMsg("Please enter your Username and Email")
        }else if(password=="" && name==""){
          setMsg("Please enter your Username and Password")
        }else if(name==""){
          setMsg("Please enter your Name")}
        else if(email==""){
          setMsg("Please enter your Email")}
          else{
          setMsg("Please enter your Password")
        }
     }
}

 const formStyles = {
    background: "whitesmoke",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
    width: "28rem",
    padding: "2rem",
    borderRadius: "1rem",
    margin: "0rem 1.5rem",
  };

  return (
    <>
      <div className="mx-auto col-10 col-md-8 col-lg-4 mt-5" style={formStyles}>
          <Form onSubmit={handleSignup}>
             <div>
                <h4 style={{ textAlign: "center" }}>SIGNUP PAGE</h4>
                <br/>
              </div>
                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type='text'
                    value={name}
                    placeholder='User Name'
                    onChange={(event) => setName(event.target.value) }
                    />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type="email" 
                    placeholder="Enter Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value) }
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value) }
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type='password'
                    value={cpassword}
                    placeholder='Confirm Password'
                    onChange={(event) => setCPassword(event.target.value) }
                    />
                </Form.Group>
                
                <p style={{ color: "red" }}>{msg}</p>
                <p style={{ color: "green" }}>{info}<Link to="/signin">{infor}</Link></p>
                
                <div className="text-center">
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                    <br/><br/>
                    <p>_________________________OR__________________________</p>
                    <p>Already Registered? <Link to="/signin">Sign In</Link></p>
                </div>
           </Form>
     </div>
    </>
  )
}

export default SignUp