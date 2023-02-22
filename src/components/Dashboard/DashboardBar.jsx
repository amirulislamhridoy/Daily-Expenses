import React from 'react';
import './DashboardBar.css';
import logo from '../../assets/Icon.png'

const DashbaordBar = () => {
    return (
        <div className='dashoard-bar'>
            <img src={logo} alt='logo'></img>
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0003 6.6738C21.0003 8.7024 19.3551 10.3476 17.3265 10.3476C15.2979 10.3476 13.6536 8.7024 13.6536 6.6738C13.6536 4.6452 15.2979 3 17.3265 3C19.3551 3 21.0003 4.6452 21.0003 6.6738Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0003 17.2617C21.0003 19.2903 19.3551 20.9346 17.3265 20.9346C15.2979 20.9346 13.6536 19.2903 13.6536 17.2617C13.6536 15.2331 15.2979 13.5879 17.3265 13.5879C19.3551 13.5879 21.0003 15.2331 21.0003 17.2617Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3467 17.2617C10.3467 19.2903 8.7024 20.9346 6.6729 20.9346C4.6452 20.9346 3 19.2903 3 17.2617C3 15.2331 4.6452 13.5879 6.6729 13.5879C8.7024 13.5879 10.3467 15.2331 10.3467 17.2617Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.209 12.1211H14.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5.13574 9.20508L2.20774 12.1211L5.13574 15.0371" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.64014 7.63C7.97014 4.05 9.31014 2.75 14.6401 2.75C21.7411 2.75 21.7411 5.06 21.7411 12C21.7411 18.94 21.7411 21.25 14.6401 21.25C9.31014 21.25 7.97014 19.95 7.64014 16.37" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    );
};

export default DashbaordBar;