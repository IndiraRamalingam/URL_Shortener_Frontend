import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom/dist'
import instance from "../../services/instance";

function ActivationPage() {
const navigate =useNavigate();
const {token}=useParams();
console.log(token)

const handleActivate =(event)=>{
    event.preventDefault(); 
    activate({token})
}

const activate = async({token})=>{
    try{
        const response = await instance.authInstance.post('/accountVerify/:token',{token});
        console.log("Sucesssssss")
        navigate(`/signin`)
    }
    catch(error)
    {
        console.log("Error")
    }
}


  return (
    <>
    <div className='container '>
        <div className='card mt-5' style={{textAlign:'center'}}>
        <h1 className='mt-5'>URL SHORTENER APP</h1>
        <h4 className='mt-5'>Please click the activation button below to activate your account.</h4>
        <div className='mt-5'>
        <button className="btn btn-primary mb-5" onClick={handleActivate}>Click to Login</button>
        </div>
        </div>
    </div>
    
    </> 
  )
}

export default ActivationPage