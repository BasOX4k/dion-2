"use client"

import "./banner.css";
export default function Banner() {
    return(
        <div className="banner"> <video src="/Trailer.mp4" title="Trailer" muted autoPlay loop />
            <div className="banner-text"> 
            </div>
        </div>
    )
}