import React, { useEffect, useState } from 'react'
import instance from "../../services/instance";
import { Link, useNavigate, useParams } from 'react-router-dom'

function GenerateUrls() {

  
    const params=useParams();
    const navigate=useNavigate();
    const[longURL,setLongURL]= useState('')
    const[shortURL,setShortURL]=useState('')
    const[shortId,setShortId]=useState('');
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState("");

    const handleGenerate =(event)=>{
        event.preventDefault();
        if(longURL !='')
        {
          setMessages('');
        generateURL({longURL})
      }
      else{
        setMessages("Enter a URL to generate")
      }
    }

    const generateURL = async({longURL}) =>{
        try{
            const response=await instance.protectedInstance.post(`/url/generateShortURL/${params.id}`,{longURL})
            if(response.status==200)
            {
                setMessage(''),setMessages('');
                const res=(response.data.newUrl);
                setShortURL(res.shortURL)
                setShortId(res.shortId)
                window.alert("URL has been generated")
                navigate(`/view_url/${params.id}`)
            }
        }
        catch(error)
        {
          setMessages('')
          setMessage("Url already exists / Too Short to Generate. Try using another / Valid URL. ");
          // window.alert("Url already exists / Too Short to Generate. Try using another URL");
          // navigate(`/view_url/${params.id}`)
          console.log("Error in Generating  " ,error)
        }
    }

  return (
    <>
    <section className="h-100" >
    <h1 className="mt-5 " style={{color:"#ffe099",'fontWeight':'bolder','textAlign':'center'}}>uShortener <span style={{fontSize:'15px',fontStyle:'italic',color:'beige'}}>- A URL Shortener</span></h1>
    
    <div className=" d-flex justify-content-end align-items-center " style={{'marginTop':'-55px','marginRight':'50px'}}>
          <button className="btn btn-danger "  onClick={()=>
          {
            localStorage.clear();
            window.location.href = '/';
          }}>LogOut</button>
      </div>

      <div className="container py-3 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
        <div className="card my-5">
        <h4 className=" mt-5 text-uppercase" style={{color:"#0d6efd",'fontWeight':'bolder','textAlign':'center','fontStyle':'italic'}}>GENERATE SHORT URL</h4>
        <div className="row g-0">
        <div className="col-xl-11 m-5 ">
        <form onSubmit={handleGenerate}>
        <div className="form-outline mb-4">
            <input type="text" className="form-control form-control-lg" 
            placeholder="Enter a long URL here"
            value={longURL}
            onChange={(event) => setLongURL(event.target.value) }
            />
        </div>

        <div className='mb-3'>
          <span style={{color:'red'}}><i>{messages}</i></span>
        </div>

        <div className='mb-4'>
          <span style={{color:'red'}}><i>{message} <Link to={`/view_url/${params.id}`}>Click to view URL's</Link></i></span>
        </div>

        <div className="d-flex justify-content-center pt-3">
            <button type='submit' className='btn btn-lg btn-success'>Shorten URL</button>
            <button className="btn btn-warning btn-lg ms-3"  onClick={()=>
            {
              navigate(`/dashboard/${params.id}`)
            }}>Back to Dashboard</button>
        </div>
            
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default GenerateUrls