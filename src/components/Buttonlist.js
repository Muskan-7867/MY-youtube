import React from 'react';
import Button from './Button';

const Buttonlist = () => {
  const list = ["All", "Music", "Gaming", 'News', 'Cricket','cooking','Motivation','Live','beauty','Physics','Maths', 'Mixes','Movies'];

  return (
    <div className="flex justify-center">
      {list.map((name, index) => (
        <div key={index} className="bg-gray-200 px-3 py-2 m-5 hover:bg-black hover:text-white rounded-lg">
          <Button name={name} />
        </div>
      ))}
    </div>
  );
}

export default Buttonlist;
