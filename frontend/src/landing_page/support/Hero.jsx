import React from "react"

export default function Hero(){
    return(
        <>
            <div style={{backgroundColor:"#387ED1", color:"white"}}>
                <div className="row">
                    <div className="col" style={{padding:"80px", marginLeft:"190px"}}>
                        <h4 className="fs-4 mb-5" style={{fontWeight:"initial", marginTop:"-40px"}}>Support Portal</h4>
                        <h3 className="fs-4 mb-4" style={{fontWeight:"initial", marginTop:"100px"}}>Search for an answer or browse help topics <br />to create a ticket</h3>
                        <input className="p-3 mb-3" type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected..." style={{height:"55px", width:"458px", borderRadius:"5px", border:"none"}} /> <br />
                        <a href="" style={{color:"white", marginRight:"25px"}}>Track account opening</a> 
                        <a href="" style={{color:"white", marginRight:"25px"}} >Track segment activation</a>
                        <a href="" style={{color:"white"}} >Intraday</a> <br />
                        <a href="" style={{color:"white", marginRight:"25px"}} >margins</a>
                        <a href="" style={{color:"white"}} >kite user manual</a>
                    </div>
                    <div className="col text-end" style={{marginTop:"40px", marginRight:"250px"}}>
                        <a href="" style={{color:"white"}} >Track Tickets</a>
                        <h3 className="fs-4 mb-3" style={{fontWeight:"initial", marginTop:"100px", marginRight:"300px"}} >Featured</h3>
                       1. <a href="" style={{color:"white", marginRight:"30px"}} >Current Takeovers and Delisting - Janaury 2026</a> <br /> <br />
                       2. <a href="" style={{color:"white", marginRight:"100px"}} >Latest Intraday leverages - MIS & CO</a>
                    </div>
                </div>
            </div>
        </>
    )
}