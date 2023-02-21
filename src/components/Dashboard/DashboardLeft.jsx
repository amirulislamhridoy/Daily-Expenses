import React from 'react';
import './DashboardLeft.css';
import cart from '../../assets/current Balance.png';

const DashboardLeft = () => {
    return (
        <div className='Dashboard-left'>
            <div>
                <h1>Kösten</h1>
                <p>Expense Manager</p>
            </div>
            <div className='current-blanace-cart' style={{ backgroundImage: "url(" + cart + ")", backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <p>CURRENT BALANCE</p>
                <div>
                    <svg width="80" height="73" viewBox="0 0 80 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77.9043 46.6726H61.7098C55.813 46.6726 51.0312 41.8909 51.0312 35.9901C51.0312 30.0933 55.813 25.3115 61.7098 25.3115H77.7773" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M63.5329 35.7458H62.2948" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.3838 19.4568H38.3005" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 36.5794C1 9.89286 10.6865 1 39.754 1C68.8175 1 78.504 9.89286 78.504 36.5794C78.504 63.2619 68.8175 72.1587 39.754 72.1587C10.6865 72.1587 1 63.2619 1 36.5794Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div>
                        <h1>%55,569</h1>
                        <p>Total Expense</p>
                    </div>
                </div>
            </div>
            <div className='activity'>
                <p>LATEST ACTIVITY</p>
                <hr />
                <p className='title'>Today</p>
                <div>

                </div>
            </div>
        </div>
    );
};

export default DashboardLeft;