import React from 'react';
import './Sidebar.css';
import Home from '../../assets/home.png';
import Gaming from '../../assets/game_icon.png';
import Automobiles from '../../assets/automobiles.png';
import Sports from '../../assets/sports.png';
import Entertainment from '../../assets/entertainment.png';
import Technology from '../../assets/tech.png';
import Music from '../../assets/music.png';
import Blogs from '../../assets/blogs.png';
import News from '../../assets/news.png';
import Jack from '../../assets/jack.png';
import Simon from '../../assets/simon.png';
import Megan from '../../assets/megan.png';
import Gerard from '../../assets/gerard.png';
import Cameron from '../../assets/cameron.png';

const Sidebar = ({openedSide, category, setCategory}) => {
  return (
    <div className={openedSide ? 'sidebar' : 'sidebar closed'}>
        <div className='side-list'>
            <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
                 <img src={Home} alt='Home'/><p className={!openedSide ? 'not-displayed' : null}>Home</p>
            </div>
            <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
                 <img src={Gaming} alt='Gaming'/><p className={!openedSide ? 'not-displayed' : null}>Gaming</p>
            </div>
            <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
                 <img src={Automobiles} alt='Automobiles'/><p className={!openedSide ? 'not-displayed' : null}>Automobiles</p>
            </div>
            <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
                 <img src={Sports} alt='Sports'/><p className={!openedSide ? 'not-displayed' : null}>Sports</p>
            </div>
            <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
                 <img src={Entertainment} alt='Entertainment'/><p className={!openedSide ? 'not-displayed' : null}>Entertainment</p>
            </div>
            <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
                 <img src={Technology} alt='Technology'/><p className={!openedSide ? 'not-displayed' : null}>Technology</p>
            </div>
            <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
                 <img src={Music} alt='Music'/><p className={!openedSide ? 'not-displayed' : null}>Music</p>
            </div>
            <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
                 <img src={Blogs} alt='Blogs'/><p className={!openedSide ? 'not-displayed' : null}>Blogs</p>
            </div>
            <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
                 <img src={News} alt='News'/><p className={!openedSide ? 'not-displayed' : null}>News</p>
            </div>
            
        </div>
        <hr className={!openedSide ? 'sidebar-line smaller' : 'sidebar-line'}/>
        <div className={!openedSide ? 'not-displayed' : 'sub'}><h3>Subscribed</h3></div>
        <div className='youtubers-list'>
            <div className='side-link' onClick={() => setCategory(1)}>
                <img className='youtuber-profile' src={Jack} alt='Jack'/><p className={!openedSide ? 'not-displayed' : null}>PewDiePie</p>
            </div>
            <div className='side-link' onClick={() => setCategory(1)}>
                <img className='youtuber-profile' src={Simon} alt='Simon'/><p className={!openedSide ? 'not-displayed' : null}>Mr Beast</p>
            </div>
            <div className='side-link' onClick={() => setCategory(1)}>
                <img className='youtuber-profile' src={Megan} alt='Megan'/><p className={!openedSide ? 'not-displayed' : null}>5-Minute Crafts</p>
            </div>
            <div className='side-link' onClick={() => setCategory(1)}>
                <img className='youtuber-profile' src={Gerard} alt='Gerard'/><p className={!openedSide ? 'not-displayed' : null}>IshowSpeed</p>
            </div>
            <div className='side-link' onClick={() => setCategory(1)}>
                <img className='youtuber-profile' src={Cameron} alt='Cameron'/><p className={!openedSide ? 'not-displayed' : null}>Nas Daily</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default Sidebar
