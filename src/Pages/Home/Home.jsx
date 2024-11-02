import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({openedSide}) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Sidebar openedSide = {openedSide} category = {category} setCategory = {setCategory}/>
      <div className={`container ${openedSide ? '' : 'large-container'}`}>
        <Feed category = {category}/>
      </div>
    </>
  )
}

export default Home
