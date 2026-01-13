export default function LeftSection({imgUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){
    return(
        <>
            <div className="container mb-5">
                <div className="row mt-5 py-5">
                    <div className="col-7 px-5 mt-3">
                        <img src={imgUrl} alt="img" style={{width:"80%"}} />
                    </div>
                    <div className="col-5 p-5 mt-5">
                        <h2 className="fs-3" style={{fontWeight:"initial"}}>{productName}</h2>
                        <p className="mt-4 mb-4">{productDescription}</p>
                        <div>
                            <a href={tryDemo} className="fs-5" style={{textDecoration:"none"}}>Try Demo →</a>
                            <a href={learnMore} className="mx-5 fs-5" style={{textDecoration:"none"}}>Learn More →</a>
                        </div>
                        <div className="mt-4">
                            <a href={googlePlay}><img src="/media/googlePlayBadge.svg" alt="google play" /></a>
                            <a href={appStore} className="mx-4" ><img src="/media/appstoreBadge.svg" alt="App Store" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}