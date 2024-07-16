"use client"
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./carousel.css";

export default function Carousel() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-theme="dark">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/caroussel/vue.png" className="d-block w-100" alt="test" />
                </div>
                <div className="carousel-item">
                    <img src="/caroussel/arbre.png" className="d-block w-100" alt="2" />
                </div>
                <div className="carousel-item">
                    <img src="/caroussel/perso.png" className="d-block w-100" alt="3" />
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
