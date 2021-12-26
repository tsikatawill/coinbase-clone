import React from 'react'

const CounterDisplay = () => {
    return (
        <section className="counter-display my-5 bg-primary text-light">
            <div className="container py-5">
                <div className="row text-center">
                    <div className="col-sm-4">
                        <h1 className="fw-bold">$327B</h1>
                        <p>Quaterly volume traded</p>
                    </div>
                    <div className="col-sm-4">
                        <h1 className="fw-bold">100+</h1>
                        <p>Countries supported</p>
                    </div>
                    <div className="col-sm-4">
                        <h1 className="fw-bold">73+M</h1>
                        <p>Verified users</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CounterDisplay
