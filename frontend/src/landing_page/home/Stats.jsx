export default function Stats(){
    return(
        <>
            <div className="container">
                <div className="row p-5">
                    <div className="col-6 p-5">
                        <h2 className="mb-5 fs-2">Trust with confidence</h2>

                        <h3 className="fs-5">Customer-first always</h3>
                        <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 <br /> lakh crores of equity investments</p>

                        <h3 className="fs-5">No spam or gimmicks</h3>
                        <p className="text-muted">TNo gimmicks, spam, "gamification", or annoying push <br /> notifications. High quality apps that you use at your pace, the <br /> way you like. Our philosophies.</p>

                        <h3 className="fs-5">The Zerodha universe</h3>
                        <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in <br />30+ fintech startups offer you tailored services specific to <br /> your needs.</p>

                        <h3 className="fs-5">Do better with money</h3>
                        <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just <br /> facilitate transactions, but actively help you do better with <br />your money.</p>
                    </div>
                    <div className="col-6 mt-3 p-5">
                        <img src="/media/ecosystem.png" alt="ecosystem" style={{width:"90%"}} />
                        <div>
                            <a style={{textDecoration:"none"}} className="mx-5" href="">Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                            <a style={{textDecoration:"none"}} href="">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}