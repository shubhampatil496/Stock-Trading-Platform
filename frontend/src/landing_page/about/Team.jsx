export default function Team(){
    return(
        <>
            <div className="container border-top">
                <div className="row p-5 mt-4">
                    <h2 className="text-center mb-5">PEOPLE</h2>
                    <div className="col-6 p-3 text-center">
                        <img src="/media/nithin-kamath.jpg" alt="nitin kamath" style={{borderRadius:"50%", width:"60%"}} />
                        <p className="mt-4 fs-5">Nithin Kamath</p>
                        <p className="fs-7 text-muted text-center">Founder, CEO</p>
                    </div>
                    <div className="col-6 p-5 my-2" style={{fontSize:"17px"}}>
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br />hurdles he faced during his decade long stint as a trader. Today,<br /> Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p>
                            He is a member of the SEBI Secondary Market Advisory Committee <br />(SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>
                            Playing basketball is his zen.
                        </p>
                        <p>
                            Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}