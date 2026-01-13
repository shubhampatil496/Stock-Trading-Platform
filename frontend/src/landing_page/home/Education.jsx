export default function Education(){
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6">
                        <img style={{width:"75"}} src="/media/education.svg" alt="varsity" />
                    </div>
                    <div className="col-6 mt-5">
                        <h2 className="fs-2 mb-4">Free and open market education</h2>
                        <p>Varsity. the largest online stock market education in the world <br /> covering everything from the basics to advanced trading.</p>
                        <p className="mb-5">
                            <a style={{textDecoration:"none"}} href="">Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                        </p>
                        <p>TradingQ&A, the most active and trading investment community in <br />India for all your market related queries  </p>
                         <p className="mb-5">
                            <a style={{textDecoration:"none"}} href="">TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                         </p>
                    </div>
                </div>
            </div>
        </>
    )
}