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
        const response = await instance.authInstance.post('/users/accountVerify/:token',{token});
        window.confirm("Your account has been activated successfully..!!!!")
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
        <h1 className="mt-5 mb-5" style={{color:"#ffe099",'fontWeight':'bolder','textAlign':'center'}}>uShortener <span style={{fontSize:'15px',fontStyle:'italic',color:'beige'}}>- A URL Shortener</span></h1>
        <h4 className='mt-2'>Please click the activation button below to activate your account.</h4>
        <div className='mt-5 mb-5'>
        <button className="btn btn-lg btn-success mb-5" onClick={handleActivate}>Click to Activate</button>
        </div>
        </div>
    </div>
    
    </> 
  )
}

export default ActivationPage