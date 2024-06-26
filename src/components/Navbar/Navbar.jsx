"use client"
// import Image from "next/image"
import Link from "next/link"
import "./navbar.css";
export default function Navbar() {
    return(
        <div className="navbar">
            <div className="nav-brand" href="/"> 
            <div>
                <img src="/Logo-Dion.08cdce3a1e089171236c-removebg-preview.png"  width={100} height={100} />
            </div>
            
            </div>


            <nav>
                <ul className="navigation">
                    <li> <Link className="nav-link" href="/"></Link>Accueil</li>
                    <li> <Link className="nav-link" href="/"></Link>A propos</li>
                    <li> <Link className="nav-link" href="/"></Link>Contact</li>

                </ul>
            </nav>
        </div>
    )
}