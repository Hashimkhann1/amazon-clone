import React from 'react'
import '../../style/Header.css'
import headerLogo from '../../images/amazon1.png'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
           <Link to={'/'}>
            <img src={headerLogo} alt='hlogo' className='header-logo'/>
           </Link>
        <div className='header-search'>
            <input type='text' placeholder='Search' className='header-searchInput' />
            <SearchIcon className='header-searchIcon' />
        </div>
            <div className='header-nav'>
            <div className='header-option'>
                <span className='header-option-one'>Hello,</span>
                <span className='header-option-two'>Sign in</span>
            </div>
            <div className='header-option'>
                <span className='header-option-one'>Returns</span>
                <span className='header-option-two'>& Orders</span>
            </div>
            <div className='header-option'>
                <span className='header-option-one'>Your</span>
                <span className='header-option-two'>Prime</span>
            </div>
            <div className='header-option-basket'>
                <div className='header-basket-number'>
                    <span className='header-option-one-basket'>0</span>
               <Link to={'/cartdetail'}><span className='header-option-main-basket text-white'><ShoppingCartIcon fontSize='large' /></span></Link> 
                </div> 
                <span className='header-option-basket-text'>Cart</span>
            </div>
        </div>
    </div>
  )
}

export default Header