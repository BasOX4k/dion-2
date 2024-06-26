"use client"
import React from "react";
import "./carousel.css";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

export default function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../../../masque/noun-baule-mask-3825805.png" className="d-block w-100" alt="test" />
                </div>
                <div className="carousel-item">
                    <img url="../../../masque/noun-baule-mask-3825805.png" className="d-block w-100" alt="2" />
                </div>
                <div className="carousel-item">
                    <img src="../../../masque/noun-tribal-mask-1763978.png" className="d-block w-100" alt="3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
