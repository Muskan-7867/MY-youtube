import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../store/reducers/appSlice';

const Head = () => {
    const dispatch  = useDispatch();
    const toggleMenuHandler=() =>{
          dispatch(toggleMenu());
    }

    return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img className='h-12 cursor-pointer' 
            onClick={() => toggleMenuHandler()}
                alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' />

            <a href='/'><img className='h-12 mx-2' alt='logo'
             src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' />
             </a>
        </div>

        <div className='col-span-10 text-center  px-10'>
            <input className='w-1/2 border border-gray-500  rounded-l-full   p-2' type='text' />

            <button className='border border-gray-500 bg-gray-100  rounded-r-full p-2'>
                 🔍
                </button>
        </div>

        <div className='col-span-1'>
            <img
                className='h-12'
                alt='icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
        </div>
    </div>

    )}
export default Head