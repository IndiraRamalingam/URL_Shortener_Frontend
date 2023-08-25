import React, { useState } from 'react'
import instance from "../../services/instance";
import { Link, useParams } from 'react-router-dom'

function Dashboard() {

    const params=useParams();
    console.log(params.id)
    const[longURL,setLongURL]= useState('')

    const handleGenerate =(event)=>{
        event.preventDefault();
        generateURL({longURL})
    }

    const generateURL = async({longURL}) =>{
        try{
            console.log(longURL)
            const response=await instance.protectedInstance.post(`/url/generateShortURL/${params.id}`,{longURL})
            if(response.status==200)
            {
                console.log(response)
            }
        }
        catch(error)
        {
            console.log("Error in Generating  " ,error)
        }
    }
    const styles={
        color: "black",
        fontSize: "larger",
        width: "28rem",
        padding: "2rem",
        borderRadius: "1rem",
        margin: "0rem 1.5rem",
        textAlign:"center"
    
      }
  return (
    <>
      <div className="mx-auto col-10 col-md-8 col-lg-4" style={styles}>
        <br/>
        <h2>URL SHORTIFY</h2> 
        <br/>      
         {/* <img src="https://ik.imagekit.io/ikmedia/backlit.jpg" width="100%"/> */}
         <br/><br/>
         <Link to="/signin"><i style={{color:"black"}}>Back to SignIn</i></Link>
        <form onSubmit={handleGenerate}>
            <input type="text"
                    placeholder="Enter URL"
                    value={longURL}
                    onChange={(event) => setLongURL(event.target.value) }
            />
            <button type='submit'>Generate</button>
        </form>

      </div>
    </>
  )
}

export default Dashboard