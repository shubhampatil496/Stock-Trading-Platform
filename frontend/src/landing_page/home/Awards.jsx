export default function Awards(){
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    {/* First Column */}
                    <div className="col-6 p-5">
                        <img src="/media/largestBroker.svg" alt="Broker"/>
                    </div>
                    {/* Second Column */}
                    <div className="col-6 p-5 mt-4">
                        <h1 className="fs-2">Largest stock broker in India</h1>
                        <p className="mt-2">2+ million Zerodha clients contribute to over 15% of all retail order <br />volumes in India daily by trading and investing in :</p>

                        <div className="row mt-5">
                            <div className="col-6">
                                <ul>
                                    <li>
                                        <p>Futures and Options</p>
                                    </li>
                                    <li>
                                        <p>Commidity derivatives</p>
                                    </li>
                                    <li>
                                        <p>Currency derivatives</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>
                                        <p>Stocks & IPOs</p>
                                    </li>
                                    <li>
                                        <p>DIrect mutual funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Govt. Securities</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <img src="/media/pressLogos.png" alt="Press Logo" className="mt-4 mb-5" style={{width:"90%"}} />
                    </div>
                </div>
            </div>
        </>
    )
}