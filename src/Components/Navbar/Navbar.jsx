import React from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import menuIcon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search.png';
import uploadIcon from '../../assets/upload.png';
import moreIcon from '../../assets/more.png';
import notificationIcon from '../../assets/notification.png';
import profileImg from '../../assets/jack.png';
import { Link } from 'react-router-dom';

const Navbar = ({ openedSide, setOpenedSide }) => {
  const location = useLocation();
  const isVideoPage = location.pathname.startsWith('/video');

  return (
    <nav>
      <div className='menu-logo'>
        {!isVideoPage && (
          <img 
            className='menu-icon' 
            src={menuIcon} 
            alt='menu Icon' 
            onClick={() => setOpenedSide(!openedSide)}
          />
        )}
        <Link to='/'><img className='logo' src={logo} alt='logo' /></Link>
      </div>
      <div className='search-container'>
        <input type='text' placeholder='Search' />
        <img className='search-icon' src={searchIcon} alt='search Icon' />
      </div>
      <div className='nav-icons'>
        <img className='upload-icon' src={uploadIcon} alt='upload Icon' />
        <img src={moreIcon} alt='more Icon' />
        <img src={notificationIcon} alt='notification Icon' />
        <img src={profileImg} alt='profile Image' className='profile-pic' />
      </div>
    </nav>
  );
};

export default Navbar;
