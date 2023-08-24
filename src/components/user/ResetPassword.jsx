import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from "../../services/instance";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

function ResetPassword() {

    const[password,setPassword] = useState('');
    const[confirmpassword,setConfirmpassword] = useState('');
    const[msg,setMsg]=useState('');
    const[info,setInfo]=useState('');
    const[infor,setInfor]=useState('');
    const {token} = useParams();

const handleUpdatesubmit = (event) =>{
    event.preventDefault();
    if(password == confirmpassword)
    {
        resetpassword({password,token})
    }
}
const resetpassword = async({password,token})=>{
    if(password !="" && token!="")
    {
        try{
            const response=await instance.authInstance.post('/reset_password/:token',{password,token});   
            // console.log(response.data.message);
            // console.log(response.data);
            setInfo("Password has been updated successfully")
            setInfor("Click here to Sign In")
            setMsg('');
    
        }
        catch(error)
        {
           // console.log("Reset Password Failed ", error);
            setMsg("Password Reset Failed")
        }
    }
    else{
        setMsg("Please enter the above fields")
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
    <div className="mx-auto col-10 col-md-8 col-lg-4 mt-5" style={formStyles}>
        <Form onSubmit={handleUpdatesubmit}>
              <div>
                <h4 style={{ textAlign: "center" }}>RESET PASSWORD</h4>
                <br/>
              </div>
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
                    value={confirmpassword}
                    placeholder='Confirm Password'
                    onChange={(event) => setConfirmpassword(event.target.value) }
                    />
                </Form.Group>
            
            <p style={{ color: "red" }}>{msg}</p>
                <p style={{ color: "green" }}>{info}</p>
                <Link to="/signin">{infor}</Link>
                
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Update Password
                    </Button>
                </div>
        </Form>
    </div>
  )
}

export default ResetPassword