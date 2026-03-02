import { Link } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero(){

    let tl = gsap.timeline()

    useGSAP(() => {
        tl.from("img",{
            y:-20,
            opacity:0,
            duration:1,
            delay:1
        })
    })

    return(
        <>
            <div className="container p-5 mb-5">
                <div className="row text-center">
                    <img src="/media/homeHero.png" alt="Hero Image" className="mb-5" />
                    <h1 className="mt-5 fs-2">Invest in everything</h1>
                    <p className="mb-4">Online platform to invest in stocks ,derivatives, mutual funds, and more</p>
                    <Link to="/signup">
                        <button type="button" class="btn btn-primary col-2 mx-auto p-2 fs-5 mb-5">Signup Now</button>
                    </Link>
                </div>
            </div>
        </>
    )
}