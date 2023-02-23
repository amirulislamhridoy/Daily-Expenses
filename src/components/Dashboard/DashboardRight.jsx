import React from 'react';
import './DashboardRight.css';
import profilePhoto from '../../assets/profile-photo.jpeg';
import useDate from '../../hook/useDate';

const DashboardRight = () => {
    const [allExpenses] = useDate()
    
    return (
        <div className='dashboard-right'>
            <div className='dashboard-right-header'>
                <button>+Add Expense</button>
                <img src={profilePhoto} alt='profile photo'></img>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.89648 16.9997C3.89648 26.8271 7.17323 30.1038 17.0007 30.1038C26.8281 30.1038 30.1048 26.8271 30.1048 16.9997C30.1048 7.17226 26.8281 3.89551 17.0007 3.89551C7.17323 3.89551 3.89648 7.17226 3.89648 16.9997Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.0825 14.957C12.0825 14.957 15.4712 19.8955 17.0012 19.8955C18.5312 19.8955 21.917 14.957 21.917 14.957" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>
        </div>
    );
};

export default DashboardRight;