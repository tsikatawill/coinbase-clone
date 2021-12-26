import React from 'react'
import Bitcoin from '../images/bitcoin.png'
import Ethereum from '../images/ethereum.png'
import Solana from '../images/solana.png'
import Cardano from '../images/cardano.png'


const Prices = () => {

    return (
        <section className='prices'>
            <div className="container">
                <table style={{ width: "100%" }} className="table table-sm table-striped">
                    <thead>
                        <tr>
                            <th className='d-none d-md-block'>#</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Chart</th>
                            <th>Change</th>
                            <th className='d-none d-md-block'>Trade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Coin img={Bitcoin} name="Bitcoin" shortName="BTC" price="GHS306, 558.80" chgClassname="danger" change="-2.08" id='1' />
                        <Coin img={Ethereum} name="Ethereum" shortName="ETH" price="GHS24, 743.17" chgClassname="danger" change="-0.52" id='2' />
                        <Coin img={Solana} name="Solana" shortName="SOL" price="GHS1,184.43" chgClassname="danger" change="-0.52" id='3' />
                        <Coin img={Cardano} name="Cardano" shortName="ADA" price="GHS8.74" chgClassname="success" change="+5.08%" id='4' />
                    </tbody>
                </table>
            </div>
        </section>
    )
}

const Coin = ({ id, img, name, shortName, price, change, chgClassname }) => {

    return (
        <tr>
            <td className='d-none d-md-block'>{id}</td>
            <th>
                <div className="inner d-flex align-items-center">
                    <img src={img} alt={img} width='30px' />
                    <div className="name d-md-flex align-items-center">
                        <p className="mx-3" style={{ padding: 0, margin: 0 }}>{name}</p>
                        <p className="text-secondary mx-3 mx-md-0" style={{ padding: 0, margin: 0 }}>{shortName}</p>
                    </div>
                </div>
            </th>
            <td>{price}</td>
            <td className="">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </td>
            <td className={`text-${chgClassname}`}>{change}</td>
            <td className='d-none d-md-block'>
                <button className="btn btn-success">Buy</button>
            </td>
        </tr>
    )
}

export default Prices
