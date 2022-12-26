import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/Shopping_App/Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div>
                <h1>
                    <Link to='/' className='logo'>
                        shopping
                    </Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/wishList/' className='wishList'>
                            WishList
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li>
                        <Link to='/signup'>
                            signup
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header