import React from 'react'
import RightImg from '../images/iphone-statistics.png'
import "./Hero.css"


const Hero = () => {
    return (
        <section className="hero">
            <div className="container d-md-flex justify-content-between my-5 align-items-center">
                <div className="left">
                    <div className="small-cta">
                        <a href="/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="HeroPill__NakedBitcoinIcon-sc-16ndsef-2 gLnfIS"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#1652F0"></path><path d="M17.274 10.515c.235-1.572-.962-2.417-2.599-2.981l.531-2.13-1.296-.323-.517 2.074c-.34-.086-.69-.165-1.039-.245l.521-2.087L11.58 4.5l-.53 2.13c-.283-.065-.56-.128-.829-.196l.002-.007-1.788-.446-.345 1.385s.962.22.942.234c.525.13.62.478.603.754L9.03 10.78c.036.01.083.023.135.043l-.137-.034-.848 3.4c-.064.158-.227.398-.595.307.014.019-.941-.235-.941-.235L6 15.745l1.688.42c.313.08.62.162.923.239l-.537 2.154 1.296.322.53-2.13c.355.096.698.184 1.034.268l-.53 2.121 1.297.323.536-2.15c2.211.419 3.873.25 4.573-1.75.564-1.61-.028-2.538-1.191-3.144.847-.195 1.485-.752 1.655-1.903zm-2.963 4.153c-.4 1.61-3.11.74-3.99.522l.713-2.854c.879.22 3.697.654 3.277 2.332zm.402-4.176c-.365 1.464-2.621.72-3.353.537l.645-2.587c.731.182 3.089.522 2.708 2.05z" fill="#fff"></path></svg>
                            <span className="px-2">
                                Jump start your portfoio
                            </span>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="HeroPill__StyledIncentiveArrow-sc-16ndsef-0 eOcbbt"><path d="M0 7h12.17l-3.28 3.28 1.41 1.41L16 6 10.3.31 8.89 1.72 12.17 5H0v2z" fill="#1652F0"></path></svg>
                        </a>
                    </div>
                    <div className="text">
                        <h1 className="fw-bold">Jump start your crypto portfolio</h1>
                        <p style={{ width: "600px", maxWidth: "100%" }}>Cryptobase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</p>
                    </div>
                    <form className="form d-md-flex my-3">
                        <input type="text" name="email" required id="email" placeholder="Email address" className="px-4" />
                        <button type="submit" className="btn btn-primary my-2 my-md-0 mx-0 mx-md-2">Get started</button>
                    </form>
                </div>
                <div className="right d-none d-md-block">
                    <img src={RightImg} alt={RightImg} className='img-fluid' />
                </div>
            </div>
        </section >
    )
}

export default Hero
