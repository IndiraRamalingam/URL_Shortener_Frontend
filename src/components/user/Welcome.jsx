import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    
  const styles={
    color: "black",
    "font-size": "larger",
    width: "28rem",
    padding: "2rem",
    borderRadius: "1rem",
    margin: "0rem 1.5rem",
    textAlign:"center"

  }
  return (
    <div className="mx-auto col-10 col-md-8 col-lg-4" style={styles}>
        <br/>
        <h2>Welcome to my page!!!</h2> 
        <br/>      
         <img src="https://ik.imagekit.io/ikmedia/backlit.jpg" width="100%"/>
         <br/><br/>
         <Link to="/signin"><i style={{color:"black"}}>Back to SignIn</i></Link>
    </div>
  )
}

export default Welcome