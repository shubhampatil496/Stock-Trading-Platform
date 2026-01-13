import React from "react"

export default function Universe(){
    return(
        <>
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="mb-5">
                        <h4 className="mb-5 fs-5" style={{fontWeight:"initial"}}>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
                    </div>
                    <h2 className="mb-4">The Zerodha Universe</h2>
                    <p className="fs-6 mb-5">Extend your trading and investment experience even further with our partner platforms</p>
                    <div className="col-4 p-3 mb-5 mt-5">
                        <img src="/media/smallcaseLogo.png" alt="" />
                        <p className="text-small text-muted">Thematic investing platform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img src="/media/streakLogo.png" alt="" style={{width:"40%"}} />
                        <p className="text-small text-muted">Algo & strategy platform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img src="/media/sensibullLogo.svg" alt=""  style={{width:"60%"}}/> <br /> 
                        <p className="text-small text-muted">Options trading platform</p>
                    </div>
                    <div className="col-4 p-3 mb-5">
                        <img src="/media/zerodhaFundhouse.png" alt="" style={{width:"45%"}} />
                        <p className="text-small text-muted">Assest management</p>
                    </div>
                    <div className="col-4 p-3">
                        <img src="/media/goldenpiLogo.png" alt="" style={{width:"40%"}} />
                        <p className="text-small text-muted">Bonds trading platform</p>
                    </div>
                    <div className="col-4 p-3">
                        <img src="/media/dittoLogo.png" alt="" style={{width:"30%"}} />
                        <p className="text-small text-muted">Insurrance</p>
                    </div>
                    <button type="button" class="btn btn-primary col-2 mx-auto p-2 fs-5 mb-5">Signup Now</button>
                </div>
            </div>
        </>
    )
}