import React from "react"

export default function Hero(){
    return(
        <>
            <div className="container">
                <div className="row text-center mt-5">
                    <div className="mb-5 border-bottom">
                        <h3 className="fs-2 ">Pricing</h3>
                        <p className="fs-5 text-muted mt-3 mb-5">Free equity and investments and flat ₹20 Intraday and F&O trades</p>
                    </div>
                    <div className="col-4 mt-5 p-3">
                        <img src="/media/pricing0.svg" alt="" />
                        <h2 className="fs-3">Free equity delivery</h2>
                        <p className="text-muted">All equity delivery investments (NSE, BSE),<br /> are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-4 mt-5 p-3">
                        <img src="/media/intradayTrades.svg" alt="" />
                        <h2 className="fs-3">Intraday and F&O trades</h2>
                        <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per <br />executed order on intraday trades across <br />equity, currency, and commodity trades. Flat <br />₹20 on all option trades.</p>
                    </div>
                    <div className="col-4 mt-5 p-3">
                        <img src="/media/pricing0.svg" alt="" />
                        <h2 className="fs-3">Free direct MF</h2>
                        <p className="text-muted">All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP <br />charges.</p>
                    </div>
                </div>
            </div>
        </>
    )
}