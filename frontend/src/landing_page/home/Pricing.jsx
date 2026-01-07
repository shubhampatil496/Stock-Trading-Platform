export default function Pricing(){
    return(
        <>
            <div className="container">
                <div className="row p-5">
                    <div className="col-4">
                        <h2 className="mb-3">Unbeatable pricing</h2>
                        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a style={{textDecoration:"none"}} href="">See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6">
                        <div className="row text-center">
                            <div className="col-6 p-2 border">
                                <h1 className="mb-4 mt-3">₹0</h1>
                                <p>Free equity delivery and <br /> mutual funds</p>
                            </div>
                            <div className="col-6 p-2 border">
                                <h1 className="mb-4 mt-3">₹20</h1>
                                <p>Intrady and F&o</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}