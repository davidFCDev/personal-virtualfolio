import React from 'react';
import { HiArrowSmUp } from 'react-icons/hi';
import './backButton.css';

const BackButton = () => {
    const handleClick = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        duration: 100
        });
    };

    return (
        <button onClick={handleClick} className='back-btn'>
            <HiArrowSmUp />
        </button>
    )
}

export default BackButton