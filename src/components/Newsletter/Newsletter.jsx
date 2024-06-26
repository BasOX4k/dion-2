"use client"

import "./newsletter.css"

export default function Newsletter() {
    return (
        <>
            <section className="newsletter">
                <div className="newsletter-container">
                    <h2 className="newsletter-title">Newsletter</h2> 
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> 

                    <form className="newsletter-form">
                        <input type="email" className="newsletter-input" placeholder="Enter your email"/>
                        <button type="submit" className="newsletter-submit">Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    )
}