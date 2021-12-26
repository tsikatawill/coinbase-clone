import React from 'react'
import Logo from "../images/logo.png"

const Footer = () => {
    return (
        <footer className="footer my-5">
            <div className="container py-5 d-md-flex justify-content-between">
                <div className="logoSide">
                    <div className="logo">
                        <img src={Logo} alt="logo" width="200px" />
                    </div>
                    <select className="select w-50 p-2 my-4">
                        <option>English</option>
                        <option>French</option>
                        <option>Spanish</option>
                        <option>Italian</option>
                        <option>German</option>
                        <option>Mandarin</option>
                        <option>Cantonese</option>
                    </select>
                    <div>
                        <p>&copy; 2021 Cryptobase</p>
                        <ul className="d-flex" style={{ margin: 0, padding: 0 }}>
                            <li style={{ marginRight: "20px", padding: 0 }}>
                                <a href="https://blog.coinbase.com" target="_blank" rel="noreferrer">Blog</a>
                            </li>
                            <li style={{ margin: "0 20px", padding: 0, listStyleType: "disc" }}>
                                <a href="https://twitter.com/coinbase.com" target="_blank" rel="noreferrer">Twitter</a>
                            </li>
                            <li style={{ margin: "0 20px", padding: 0, listStyleType: "disc" }}>
                                <a href="https://facebook.com/Coinbase.com" target="_blank" rel="noreferrer">Facebook</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="lists my-3 my-md-0 px-0 px-md-5"> */}
                <div className="lists my-3 my-md-0">
                    <div className="row">
                        <div className="list--group col-lg-4 col-md-6">
                            <section className="mb-4">
                                <h2 className="text-dark">Company</h2>
                                <ul>
                                    <li><a href="https://coinbase.com/about" title="Learn more about the company">About</a></li>
                                    <li><a href="https://coinbase.com/careers" title="Work at Coinbase">Careers</a></li>
                                    <li><a href="https://coinbase.com/affiliates" title="Earn money becoming an affiliate">Affiliates</a></li>
                                    <li><a href="https://blog.coinbase.com/" title="The Coinbase Blog" >Blog</a></li>
                                    <li><a href="https://coinbase.com/press" title="In the news" >Press</a></li>
                                    <li><a href="https://investor.coinbase.com/" title="Investors" >Investors</a></li>
                                    <li><a href="https://coinbase.com/legal/user_agreement" title="Our privacy and legal policies" >Legal &amp; privacy</a></li>
                                    <li><a href="https://coinbase.com/legal/cookie" title="Our cookie policy">Cookie policy</a></li>
                                    <li><a href="https://coinbase.com/legal/cookie" title="Our cookie policy" >Cookie preferences</a></li>
                                </ul>
                            </section>
                            <section className="mb-4">
                                <h2 className="text-dark">Learn</h2>
                                <ul>
                                    <li><a href="https://coinbase.com/browse" title="Browse crypto prices">Browse crypto prices</a></li>
                                    <li><a href="https://coinbase.com/bytes" title="Coinbase Bytes newsletter">Coinbase Bytes newsletter</a></li>
                                    <li><a href="https://coinbase.com/learn/crypto-basics" title="Crypto basics">Crypto basics</a></li>
                                    <li><a href="https://coinbase.com/learn/tips-and-tutorials" title="Tips &amp; tutorials">Tips &amp; tutorials</a></li>
                                    <li><a href="https://coinbase.com/learn/market-updates" title="Market updates">Market updates</a></li>
                                    <li><a href="https://coinbase.com/learn/crypto-basics/what-is-bitcoin" title="What is Bitcoin?">What is Bitcoin?</a></li>
                                    <li><a href="https://coinbase.com/learn/crypto-basics/what-is-cryptocurrency" title="What is crypto?">What is crypto?</a></li>
                                    <li><a href="https://coinbase.com/learn/crypto-basics/what-is-a-blockchain" title="What is a blockchain?">What is a blockchain?</a></li>
                                    <li><a href="https://coinbase.com/learn/tips-and-tutorials/how-to-set-up-a-crypto-wallet" title="How to set up a crypto wallet">How to set up a crypto wallet</a></li>
                                    <li><a href="https://coinbase.com/learn/tips-and-tutorials/how-to-send-crypto" title="How to send crypto">How to send crypto</a></li>
                                    <li><a href="https://coinbase.com/learn/crypto-basics/understanding-crypto-taxes" title="2019 Crypto Tax Guide">Taxes</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="list--group col-lg-4 col-md-6">
                            <section className="mb-4">
                                <h2 className="text-dark">Individuals</h2>
                                <ul>
                                    <li><a href="https://coinbase.com/dashboard" title="Buy &amp; sell" >Buy &amp; sell</a></li>
                                    <li><a href="https://coinbase.com/earn" title="Earn free crypto" >Earn free crypto</a></li>
                                    <li><a href="https://wallet.coinbase.com" title="Coinbase Wallet - Store your cryptocurrency" >Wallet</a></li>
                                    <li><a href="https://coinbase.com/card" title="Coinbase Card" >Card</a></li>
                                </ul>
                            </section>
                            <section className="mb-4">
                                <h2 className="text-dark">Businesses</h2>
                                <ul>
                                    <li><a href="https://coinbase.com/prime" title="Cryptocurrency trading for institutions" >Prime</a></li>
                                    <li><a href="https://custody.coinbase.com" title="Coinbase Custody - Cryptocurrency custody for institutions" >Custody</a></li>
                                    <li><a href="https://assethub.coinbase.com" title="List your asset on Coinbase" >Asset Hub</a></li>
                                    <li><a href="https://commerce.coinbase.com" title="Coinbase Commerce - Start accepting cryptocurrency payments" >Commerce</a></li>
                                </ul>
                            </section>
                            <section className="mb-4">
                                <h2 className="text-dark">Developers</h2>
                                <ul>
                                    <li><a href="https://cloud.coinbase.com" title="Coinbase Cloud" >Coinbase Cloud</a></li>
                                    <li><a href="https://developers.coinbase.com/docs/wallet/coinbase-connect" title="Connect" >Connect</a></li>
                                    <li><a href="https://commerce.coinbase.com/docs" title="Commerce" >Commerce</a></li>
                                    <li><a href="https://developers.coinbase.com/docs/exchange/" title="Pro" >Pro</a></li>
                                    <li><a href="https://bisontrails.co/" title="Bison Trails" >Bison Trails</a></li>
                                    <li><a href="https://walletlink.org/" title="WalletLink" >WalletLink</a></li>
                                    <li><a href="https://www.rosetta-api.org/" title="Rosetta" >Rosetta</a></li>
                                    <li><a href="https://www.centre.io/developer-resources" title="USDC" >USDC</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="list--group col-lg-4 col-md-6">
                            <section className="mb-4">
                                <h2 className="text-dark">Support</h2>
                                <ul>
                                    <li><a href="https://help.coinbase.com/en" title="Our help center" >Help center</a></li>
                                    <li><a href="https://help.coinbase.com/en/contact-us/" title="Contact us" >Contact us</a></li>
                                    <li><a href="https://help.coinbase.com/en/coinbase/getting-started/getting-started-with-coinbase/create-a-coinbase-account/" title="Coinbase support article for creating an account" >Create account</a></li>
                                    <li><a href="https://help.coinbase.com/en/coinbase/managing-my-account#identity-verification/" title="Coinbase support article for ID verification" >ID verification</a></li>
                                    <li><a href="https://help.coinbase.com/en/coinbase/managing-my-account/" title="Coinbase support article for account information" >Account information</a></li>
                                    <li><a href="https://help.coinbase.com/en/coinbase/getting-started#add-a-payment-method/" title="Coinbase support article for payment methods" >Payment methods</a></li>
                                    <li><a href="https://help.coinbase.com/en/coinbase/managing-my-account/" title="Coinbase support article for account access" >Account access</a></li>
                                    <li><a href="https://help.coinbase.com/en/supported-crypto.html" title="Coinbase support article for supported cryptocurrencies" >Supported crypto</a></li>
                                    <li><a href="https://www.coinbase.com/places/" title="Countries where Coinbase operates" >Supported countries</a></li>
                                    <li><a href="https://status.coinbase.com" title="Check the operational status of Coinbase services" >Status</a></li>
                                </ul>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <section className="mb-4 text-center">
                    <p>Cryptobase | A coinbase clone, sorta</p>
                    <p>Developed by <a href="https://wwww.github.com/tsikatawill">Willman</a> &copy; 2021</p>
                </section>
            </div>
        </footer >
    )
}

export default Footer
