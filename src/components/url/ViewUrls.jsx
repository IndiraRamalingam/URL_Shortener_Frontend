import React, { useEffect, useState } from 'react'
import instance from "../../services/instance";
import { Link, useParams,useNavigate } from 'react-router-dom'

function ViewUrls() {

    const params=useParams();
    const navigate=useNavigate();
    const baseURL='https://ushorten.onrender.com/api/url';
    const[urls,setUrls]=useState([]);

    useEffect(()=>{
      fetchUrl();
    });

    const fetchUrl = async() =>{
      const response=await instance.protectedInstance.get(`/url/all/${params.id}`)
      setUrls(response.data.urls)
    } 

    console.log(urls)

  return (
    <>
    <section className='h-100'>   
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
      <h5 className=" mt-4 mb-4 " style={{color:"white",'fontWeight':'bolder','textAlign':'center',fontStyle:'italic'}}>List Of Short URL's</h5>
      <div className="table-responsive ">
      <table className="table table-hover text-center border border-5 border-primary">
        <thead className="thead table-primary border border-5 border-primary">
          <tr>
            <th>#</th>
            <th>Original Url</th>
            <th>Short Url</th>
            <th>Click Count</th>
          </tr>
        </thead>
          {
          urls.map((url, idx) => (
            <tbody className=''>  
            <tr key={idx}>
                <td>{idx+1}</td>
              <td>{url.longURL}</td>
              <td>
                <a href={`${baseURL}/${url.shortId}`} target='_blank' rel="noreferrer">{url.shortId}</a>
              </td>
              <td>{url.clicks}</td>
            </tr>
            </tbody>
          ))}
       
      </table>
    </div>

    <div className="d-flex justify-content-center pt-3">
            <button type='submit' className='btn btn-lg btn-success' onClick={()=>
            {
              navigate(`/generate_url/${params.id}`)
            }}
            >Generate Short URL</button>
            <button className="btn btn-warning btn-lg ms-3"  onClick={()=>
            {
              navigate(`/dashboard/${params.id}`)
            }}>Back to Dashboard</button>
        </div>
    </div>
    </div>
    </div>
    </section>
 
    </>
  )
}

export default ViewUrls