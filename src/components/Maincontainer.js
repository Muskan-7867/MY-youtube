import React from 'react';
import Buttonlist from './Buttonlist';
import Videocontainer from './Videocontainer';

const Maincontainer = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-shrink-0 overflow-x-auto">
        <Buttonlist />
      </div>
      <div className="flex-grow overflow-y-auto">
        <Videocontainer />
      </div>
    </div>
  );
};

export default Maincontainer;
