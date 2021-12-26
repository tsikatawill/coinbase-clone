import React from 'react'
import StellarLogo from '../images/stellar-lumens.svg'


const Earn = () => {
    return (
        <section className="earn">
            <div className="container my-5 py-5 d-sm-flex justify-content-between">
                <div className="text text-center text-md-start px-3 px-sm-0" style={{ width: "400px", maxWidth: "100%" }}>
                    <h2>Earn up to $10 worth of crypto</h2>
                    <p>Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                    <button className="btn btn-primary">Start earning</button>
                </div>
                <div className="stellar px-0 px-md-5 my-4 my-md-0 fw-bold">
                    <div className="btn fw-bold mb-2 hover-item d-flex align-items-center p-3 text-dark justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src={StellarLogo} alt={StellarLogo} />
                            <span className="px-2 fw-bold">Stellar Lumens XLM</span>
                        </div>
                        <span className="text-success">Earn $10 XLM</span>
                    </div>
                    <a style={{ textDecoration: 'none' }} href="https://coinbase.com/earn">View more &raquo; </a>
                </div>
            </div>
        </section>
    )
}

export default Earn
