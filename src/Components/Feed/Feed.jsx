import React, { useEffect, useState } from 'react';
import './Feed.css';
import {Link} from 'react-router-dom';
import { API_Key, values_converter } from '../../data';
import moment from 'moment';

const Feed = ({category}) => {

    const [data, setData] = useState([]);

    const fetchData = async() => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_Key}`;
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
    }

    useEffect(() =>{
        fetchData();
    },[category]);
    
  return (
    <div className='feed'>
        {
            data.map(item =>{
                return(
                <Link key={item.id} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                    <img src= {item.snippet.thumbnails.medium.url} alt='thumbnail'/>
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{values_converter(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()} hours ago</p>
                </Link>
                )
            })
        }
        
      
    </div>
  )
}

export default Feed
