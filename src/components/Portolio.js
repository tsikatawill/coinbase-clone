import React from 'react'
import PortfolioStats from "../images/portfolio.webp"
import PortfolioStatsMobile from "../images/portfolio-mobile.webp"
import Manage from "../images/manage.png"
import Recurring from "../images/recurring.png"
import MobileApps from "../images/mobile-apps.png"

const Portolio = () => {
    return (
        <section className="portfolio">
            <div className="container my-5">
                <div className="head text-center ">
                    <h1>Create your cryptocurrency portfolio today </h1>
                    <p>Cryptobase has a variety of features that make it the best place to start trading</p>
                </div>
                <div className="d-lg-flex align-items-center py-5">
                    <div className="d-block d-md-none image">
                        <img src={PortfolioStatsMobile} alt="" className="img-fluid" />
                    </div>
                    <div className="text">
                        <Article img={Manage} title="Manage your portfolio" text="Buy and sell popular digital currencies, keep track of them in the one place" />
                        <Article img={Recurring} title="Recurring buys" text="Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly." />
                        <Article img={MobileApps} title="Mobile apps" text="Stay on top of the markets with the Coinbase app for " links={<>
                            <a href="https://play.google.com/store/apps/details?id=com.coinbase.android">Android</a> and <a href="https://itunes.apple.com/us/app/coinbase-buy-sell-bitcoin/id886427730">IOS</a>
                        </>
                        }
                        />

                    </div>

                    <div className="d-none d-md-block image">
                        <img src={PortfolioStats} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Article = ({ img, title, text, links }) => {
    return (
        <article className="d-md-flex text-center text-md-start">
            <img src={img} alt={title} style={{ borderRadius: "50%", boxShadow: "3px 3px 20px rgb(93, 190, 255, 0.2)", width: '60px', height: "60px" }} />
            <div className="text px-4">
                <h3>{title}</h3>
                <p>{text}{links}</p>
            </div>
        </article>
    )
}

export default Portolio
