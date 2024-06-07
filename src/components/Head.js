import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../store/reducers/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    const [showSearch, setShowSearch] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setShowSearch(window.innerWidth > 536);
            setIsSmallScreen(window.innerWidth <= 536);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
        // Remove extra search button if on small screen
        if (isSmallScreen) {
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.classList.toggle('w-2/3'); 
            }
        }
    };
    

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg md:grid-cols-5 grid-cols-1 gap-4'>
            <div className='flex items-center justify-between md:justify-start col-span-1'>
                <img 
                    className='h-10 cursor-pointer' 
                    onClick={toggleMenuHandler} 
                    alt='menu' 
                    src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' 
                />
                <a href='/' className='ml-1 md:ml-2'>
                    <img 
                        className='h-14' 
                        alt='logo' 
                        src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' 
                    />
                </a>
            </div>
            <div className='col-span-1 md:col-span-2 h-8 flex mt-3 ml-10 justify-center items-center'>
                {!showSearch && (
                    <button className='border border-gray-500 bg-gray-100 rounded-l-full  rounded-r-full p-2' onClick={toggleSearch}>
                        🔍
                    </button>
                )}
                {showSearch && (
                    <>
                        <input 
    id="searchInput" // Add id for selecting the input element
    className={`w-full md:w-1/2 xl:w-4/5 border border-gray-500 rounded-l-full rounded-r-full p-2 ${isSmallScreen && 'w-1/2'}`} 
    type='text' 
/>

                        <button className='border border-gray-500 bg-gray-100  rounded-r-full p-2' onClick={toggleSearch}>
                        🔍
                        </button>

                        {isSmallScreen && (
                            <button className='border border-gray-500 bg-gray-100   rounded-r-full p-2' onClick={toggleSearch}>
                                ✖️
                            </button>
                        )}
                    </>
                )}
            </div>
            <div className='flex justify-end items-center col-span-2 space-x-4 md:col-span-2'>
                {showSearch && (
                    <button className='border border-gray-500 bg-gray-100 rounded-full p-2'>
                        <img
                            className='h-6'
                            alt='microphone' 
                            src='https://img.icons8.com/material-rounded/24/000000/microphone.png' 
                        />
                    </button>
                )}
                {!showSearch && (
                    <>
                        <button className='border border-gray-500 bg-gray-100 rounded-full p-2 hidden md:block'>
                            <img
                                className='h-6'
                                alt='microphone' 
                                src='https://img.icons8.com/material-rounded/24/000000/microphone.png' 
                            />
                        </button>
                        <button className='border border-gray-500 bg-gray-100 rounded-full p-2 hidden md:block'>
                            <img
                                className='h-6'
                                alt='create' 
                                src='https://img.icons8.com/material-rounded/24/000000/create-new--v1.png' 
                            />
                        </button>
                        <button className='border border-gray-500 bg-gray-100 rounded-full p-2 hidden md:block'>
                            <img
                                className='h-6'
                                alt='notification' 
                                src='https://img.icons8.com/material-rounded/24/000000/appointment-reminders.png' 
                            />
                        </button>
                    </>
                )}
                <img
                    className='h-10'
                    alt='icon' 
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' 
                />
            </div>
        </div>
    );
};

export default Head;
