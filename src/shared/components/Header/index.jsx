import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-public'>
            <div className='header-public__logo'>
                {/* <img src={logo} alt='logo' /> */}
                <h3>Logo</h3>
            </div>
            <div className='header-public__menu'>
                <ul>
                    <li> <Link to='/'> Home</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                    <li> <Link to='/projects'>Projects</Link></li>
                    <li> <Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header