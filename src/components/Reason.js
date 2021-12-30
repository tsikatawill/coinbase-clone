import React from 'react'
import Secure from '../images/secure.png'
import Insurance from '../images/insurance.png'
import Industry from '../images/industry.png'

const Reason = () => {
    return (
        <section className="reason">
            <div className="container my-5 py-5">
                <div className="head text-center mb-5">
                    <h1>The most trusted cryptocurrency platform</h1>
                    <p>Here are a few reasons why you should choose Cryptobase</p>
                </div>
                <div className="cards mt-5 ">
                    <div className="row">
                        <Article title="Secure storage" img={Secure} text="We store the vast majority of the digital assets in secure offline storage." />
                        <Article title="Protected by insurance" img={Insurance} text="Cryptobase maintains crypto insurance and all USD cash balances are covered by FDIC insurance, up to a maximum of $250,000." />
                        <Article title="Industry best practices" img={Industry} text="Cryptobase supports a variety of the most popular digital currencies" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Article = ({ img, title, text }) => {
    return <article className="article col-md-4 text-center">
        <img src={img} alt={title} style={{ width: "70px" }} />
        <div className="text">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </article>
}

export default Reason
