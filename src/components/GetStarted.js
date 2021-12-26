import React from 'react'
import Account from '../images/account.png'
import Bank from '../images/bank.png'
import Buying from '../images/buying.png'

const GetStarted = () => {
    return (
        <section className="get-started">
            <div className="container py-5">
                <div className="head text-center ">
                    <h1>Get started in a few minutes</h1>
                    <p>Cryptobase supports a variety of the most popular digital currencies.</p>
                </div>
                <div className="starting-steps">
                    <div className="row text-center">
                        <div className="col-sm-4 py-2 py-sm-0">
                            <img src={Account} alt={Account} style={{ width: '80px' }} />
                            <h3 className='py-2'>Create an account</h3>
                        </div>
                        <div className="col-sm-4 py-2 py-sm-0">
                            <img src={Bank} alt={Bank} style={{ width: '80px' }} />
                            <h3 className='py-2'>Link your bank account</h3>
                        </div>
                        <div className="col-sm-4 py-2 py-sm-0">
                            <img src={Buying} alt={Buying} style={{ width: '80px' }} />
                            <h3 className='py-2'>Start buying and selling</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStarted
