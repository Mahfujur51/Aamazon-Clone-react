import React from 'react'
import '../Header/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/">
                <img src="/logo/logo.png" className='header__logo' alt="" />
            </Link>
            <div className='header_search'>
                <input type="text" className='header_searchInput' />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello Mahfujur</span>
                    <span className='header_optionLineTwo'>Sign In</span>

                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your </span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
            </div>
            <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <div className="header_optionLineTwo header_busketCount">0</div>
                </div>
            </Link>
        </div>
    )
}

export default Header