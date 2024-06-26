"use client"
// import Image from "next/image"
import Link from "next/link"
import "./footer.css";
export default function Footer() {
    return(
        <div className="footer">
            <div className="footer-brand" href="/"> 
            <div>
                <img src="/Logo-Dion.08cdce3a1e089171236c-removebg-preview.png"  width={100} height={100} />
            </div>
            
            </div>


            <nav>
                <ul className="footer-navigation">
                    <li> <Link className="footer-link" href="/"></Link>TikTok</li>
                    <li> <Link className="footer-link" href="/"></Link>Youtube</li>
                    <li> <Link className="footer-link" href="/"></Link>Instagram</li>

                </ul>
            </nav>
        </div>
    )
}