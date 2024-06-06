import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../store/reducers/appSlice';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';


const Watchpage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const dispatch = useDispatch();

  const [videoDetails, setVideoDetails] = useState({
    title: '',
    channelTitle: '',
    views: '',
    publishedAt: '',
    description: ''
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());

    const fetchVideoDetails = async () => {
      try {
        const API_KEY = 'AIzaSyCgwphTMhJ8vQODVqTHdxqdPK1oZA_m_N8';
        const videoResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`);
        const videoData = videoResponse.data.items[0];

        setVideoDetails({
          title: videoData.snippet.title,
          channelTitle: videoData.snippet.channelTitle,
          views: videoData.statistics.viewCount,
          publishedAt: new Date(videoData.snippet.publishedAt).toLocaleDateString(),
          description: videoData.snippet.description
        });

        const commentsResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`);
        const commentsData = commentsResponse.data.items.map(item => ({
          author: item.snippet.topLevelComment.snippet.authorDisplayName,
          text: item.snippet.topLevelComment.snippet.textDisplay,
          publishedAt: new Date(item.snippet.topLevelComment.snippet.publishedAt).toLocaleDateString()
        }));
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching video details or comments:', error);
      }
    };

    if (videoId) {
      fetchVideoDetails();
    }
  }, [dispatch, videoId]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full max-w-6xl">
        <iframe
          className="w-full h-64 md:h-[600px]"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="p-6">
          <div className="text-2xl font-semibold mb-2">{videoDetails.title}</div>
          <div className="flex items-center justify-between text-gray-700 mb-4">
            <div className="flex items-center space-x-2">
              <img src="https://via.placeholder.com/48" alt="Channel" className="rounded-full" />
              <div className="text-lg font-medium">{videoDetails.channelTitle}</div>
            </div>
            <div className="text-sm">{videoDetails.views} views • {videoDetails.publishedAt}</div>
          </div>
          <div className="text-gray-700 mb-4">{videoDetails.description}</div>
          <div className="flex items-center space-x-4 mb-6">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full">
              Like
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full">
              Dislike
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full">
              Share
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full">
              Save
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full">
              Report
            </button>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            {comments.map((comment, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="text-sm font-semibold">{comment.author}</div>
                  <div className="text-sm text-gray-600 ml-2">{comment.publishedAt}</div>
                </div>
                <div className="text-gray-800">{comment.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Watchpage;
