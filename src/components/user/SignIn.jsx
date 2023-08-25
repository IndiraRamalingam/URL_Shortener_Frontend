import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from "../../services/instance";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignIn() {
 
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[msg,setMsg]=useState('');
  const navigate=useNavigate();
  
  const handleSignin =(event) =>
  {
    event.preventDefault();
    signin({email,password})  
  }

  const signin = async({email,password})=>{
    if(email!="" && password!="")
    {
      try
      {  
          const response = await instance.authInstance.post('/users/signin',{email,password});
          sessionStorage.setItem("token", response.data.token)
          if (response.status === 200) {
            const response = await instance.protectedInstance.get('/url/getId');
            const res=response.data;
            const params_id=res.user_ID;
            navigate(`/dashboard/${params_id}`)
          }   
      }
      catch(error)
      {   
          setMsg("Invalid Email/Password");
      }     
    }
    else
    {
        if(email=="" && password==""){
          setMsg("Please enter your Email and password")
        }else if(email==""){
          setMsg("Email is required")
        }else{
          setMsg("Password cannot be empty")
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
            <Form onSubmit={handleSignin}>
              <div>
                <h4 style={{ textAlign: "center" }}>LOGIN PAGE</h4>
                <br/>
              </div>
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
                
                <p style={{ color: "red" }}>{msg}</p>

                <div className="text-center">
                    <Button variant="primary" type="submit">
                      Sign In
                    </Button>
                    <br/><br/>
                    <Link to='/forgot_password'>Forgot Password</Link>
                    <br/><br/>
                    <p>_________________________OR__________________________</p>
                    <p>New User? <Link to="/signup">Sign Up</Link></p>
                </div>
              </Form>           
        </div>
      </>
    )
  }
  

export default SignIn