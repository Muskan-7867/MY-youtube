import React from 'react';
import Button from './Button';

const Buttonlist = () => {
  const list = [
    "All", "Music", "Gaming", 'News', 'Cricket', 'Cooking', 'Motivation', 
    'Live', 'Beauty', 'Physics', 'Maths', 'Mixes', 'Movies', 'Travel', 
    'Education', 'Comedy', 'Sports', 'Technology', 'Fashion', 'Science', 
    'Health', 'Nature', 'Kids', 'Documentary', 'Art'
  ];

  return (
    <div className="flex overflow-x-auto whitespace-nowrap py-4 px-2">
      {list.map((name, index) => (
        <div key={index} className="bg-gray-200 inline-block px-3 py-2 mx-2 hover:bg-black hover:text-white rounded-lg">
          <Button name={name} />
        </div>
      ))}
    </div>
  );
}

export default Buttonlist;
