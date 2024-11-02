import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import {API_Key, values_converter} from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {
  const {videoId} = useParams();
  const [apiData,setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchApiData = async() =>{
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_Key}`;
    await fetch(videoDetails_url).then(response => response.json()).then(data => setApiData(data.items[0]));
  }

  const fetchChannelData = async(channelId) =>{
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_Key}`;
    await fetch(channelDetails_url).then(response => response.json()).then(data => setChannelData(data.items[0]));
  }

  const fetchCommentData = async() =>{
      const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_Key}`;
      await fetch(commentData_url).then(response => response.json()).then(data => setCommentData(data.items))
  }

  useEffect(()=>{
    fetchApiData();
  },[videoId]);

  useEffect(()=>{
    if(apiData){
      fetchChannelData(apiData.snippet.channelId);
      fetchCommentData();
    } 
  },[apiData]);

  
  return (
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h2 className='video-title'>{apiData ? apiData.snippet.title : 'Title Here'}</h2>
      <div className='video-infos'>
       <p>{apiData ? values_converter(apiData.statistics.viewCount) : 0} Views &bull; {apiData? moment(apiData.snippet.publishedAt).fromNow():''} hours ago</p>
       <div className='video-interactions'>
       <span><img src={like} alt='like'/>{apiData ? values_converter(apiData.statistics.likeCount) : 0}</span>
       <span><img src={dislike} alt='dislike'/></span>
       <span><img src={share} alt='share'/>Share</span>
       <span><img src={save} alt='save'/>Save</span>
       </div>
      </div>

      <hr className='video-line'/>

      <div className='publisher'>
        <div className='channel-profile'>
            <img src={channelData? channelData.snippet.thumbnails.default.url : ''} alt='channel profile'/>
            <div className='channel-name'>
            <h2>{apiData ? apiData.snippet.channelTitle : 'Channel Title Here'}</h2>  
            <p>{channelData ? values_converter(channelData.statistics.subscriberCount)  : ''} Subscribers</p>
            </div>
        </div>
        <button>Subscribe</button>
      </div>

     <div className='desc-comms'>
     <div className='video-description'>
        <p>{apiData ? apiData.snippet.description.slice(0,250) : 'Description Here'}</p>
      </div>

      <hr className='video-line'/>

      <h3 className='comments-count'>{apiData ? values_converter(apiData.statistics.commentCount): 0} Comments</h3>

      <div className="comments-section">
        {
          commentData.map(item =>{
            return(
            <div key={item.id} className="comment-card">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='user profile'/>
              <div className='user-infos'>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                  <p className='comment'>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                      <div className='comment-rates'>
                          <span><img src={like} alt='like'/>{values_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                          <span><img src={dislike} alt='dislike'/></span>
                      </div>
                  
              </div>
            </div>
          )})
        }
      </div>
     </div>
      


    </div>
  )
}

export default PlayVideo
