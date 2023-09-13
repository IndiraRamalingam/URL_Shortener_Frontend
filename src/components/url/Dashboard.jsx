import React, { useEffect, useState } from 'react'
import instance from "../../services/instance";
import { Link, useNavigate, useParams } from 'react-router-dom'

function Dashboard() {
    const params=useParams();
    const navigate=useNavigate();
    console.log(params.id)
    const[monthCount,setMonthCount]=useState(0);
    const[dayCount,setDayCount]=useState(0);
    useEffect(()=>{
      fetchUrl();
    });

    const fetchUrl = async() =>{
      const response=await instance.protectedInstance.get(`/url/all/${params.id}`)
      setMonthCount(response.data.monthlyurlcount)
      setDayCount(response.data.dayurlcount)
    } 
    console.log(monthCount, dayCount)

return(
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
        <div className="card my-4">
        
        <h2 className=" mt-5 text-uppercase" style={{color:"rgb(38 169 51)",'fontWeight':'bolder','textAlign':'center',fontStyle:'italic'}}>DASHBOARD</h2>
        <div className="row g-0">
        <div className="col-xl-4 m-5 d-none d-xl-block">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3kYX33KHeeFkzYmXX7a-0KNTII_o945Lsy_SAi_9lSwHMapjqSIIAoVTUitpnxNb5yg&usqp=CAU'
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'400px'}}/>
        </div>
        <div className="col-xl-7">
          <div className="card-body p-md-5 text-black">

          <div className="card border-primary text-center mb-5">  
            <div className="card-body text-primary">
              <h6 className="card-title  fs-3">Monthly Report</h6>
              <p className="card-text"><i>Number Of URL shortend on this month : <span style={{color:'red',fontWeight:'bold'}}>{monthCount}</span></i></p>
            </div>
          </div>

          <div className="card border-primary text-center mb-5">  
            <div className="card-body text-primary">
              <h6 className="card-title  fs-3">Daily Report</h6>
              <p className="card-text"><i>Number Of URL shortend on today : <span style={{color:'red',fontWeight:'bold'}}>{dayCount}</span></i></p>
            </div>
          </div>
        
          <div className='mt-3'>
            <button className='btn btn-lg btn-warning mt-3' style={{'marginRight':'80px'}}
              onClick={()=>{navigate(`/generate_url/${params.id}`)}}>
              Click to Generate Short URL
            </button>
            <button className='btn btn-lg btn-success mt-3' 
              onClick={()=>{navigate(`/view_url/${params.id}`)}}>
              Click to view Generated URL's
            </button>
          </div>

          </div>
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

export default Dashboard