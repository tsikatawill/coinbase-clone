import React from 'react'
import Logo from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [sticky, setSticky] = React.useState(false)
    const [open, setOpen] = React.useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }


    const handleScroll = () => {
        if (window.scrollY > 100) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }

    // React.useEffect(handleScroll, [])

    window.addEventListener('scroll', handleScroll)



    return (
        <nav className={`navbar ${sticky && 'sticky'} ${open && 'open'}`}>
            <div className="container-fluid py-2 d-xl-flex align-items-center">
                <div className="navbar-logo">
                    <img src={Logo} alt="logo" className='logo' />
                </div>
                <ul className="main-nav d-none d-xl-flex">
                    <li onClick={handleToggle}>
                        <a href="/">Prices</a>
                    </li>
                    <li onClick={handleToggle}>
                        <a href="/">Learn</a>
                    </li>
                    <li onClick={handleToggle}>
                        <a href="/">Individuals</a>
                    </li>
                    <li onClick={handleToggle}>
                        <a href="/">Businesses</a>
                    </li>
                    <li onClick={handleToggle}>
                        <a href="/">Developers</a>
                    </li>
                    <li onClick={handleToggle}>
                        <a href="/">Company</a>
                    </li>
                </ul>
                <ul className="cta d-none d-xl-flex">
                    <li>
                        <a href="/">Sign in</a>
                    </li>
                    <li>
                        <a href="/" className="btn btn-primary">Get started</a>
                    </li>
                </ul>
                <button className="btn btn-primary d-block d-xl-none" onClick={handleToggle}>=</button>
            </div>

        </nav>
    )
}

export default Navbar
