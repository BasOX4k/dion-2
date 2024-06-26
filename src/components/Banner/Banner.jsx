"use client"
// import Trailer-Gameplay from '../../public/Trailer-Gameplay.mp4';
import "./banner.css";
export default function Banner() {
    return(
        <div className="banner"> <video src="/Trailer.mp4" title="Trailer" muted loop />
            <div className="banner-text"> <img src="/Logo-Dion.08cdce3a1e089171236c-removebg-preview.png" />
            </div>
        </div>
    )
}