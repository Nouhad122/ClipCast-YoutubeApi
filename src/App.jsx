import React,{ useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

const App = () => {
  const [openedSide, setOpenedSide] = useState(true);
  return (
    <div>
      <Navbar openedSide = {openedSide} setOpenedSide = {setOpenedSide}/>
      <Routes>
        <Route path='/' element= {<Home openedSide = {openedSide}/>}/>
        <Route path='/video/:categoryId/:videoId' element= {<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
