import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_Key, values_converter } from '../../data';
import { Link } from 'react-router-dom';


const Recommended = ({categoryId}) => {
  const [recommendedData,setRecommendedData] = useState([]);

  const fetchRecommendedData = async() =>{
    const recommendedVideos_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_Key}`;
    await fetch(recommendedVideos_url).then(response => response.json()).then(data => setRecommendedData(data.items));
  }
  useEffect(() =>{
    fetchRecommendedData();
  },[]);
  return (
    <div className='recommended-videos'>
      <h2 className='recommended'>Recommended</h2>
      {
        recommendedData.map(item =>{
          return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={item.id} className='rec-vid'>
              <img src={item.snippet.thumbnails.medium.url} alt=''/>
              <div className='rec-vid-infos'>
                  <h4>{item.snippet.title}</h4>
                  <h3>{item.snippet.channelTitle}</h3>
                  <p>{values_converter(item.statistics.viewCount)} Views</p>
              </div>
          </Link>
        )})
      }
      
      
    </div>
  )
}

export default Recommended
