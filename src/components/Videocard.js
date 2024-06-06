import React from 'react';

const Videocard = ({ info }) => {
  if (!info) {
    return null; // Render nothing if info is not available
  }

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img  className='rounded-lg ' alt='video' src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{viewCount}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default Videocard;
