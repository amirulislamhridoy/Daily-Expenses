import React from 'react';
import './Dashboard.css';
import DashboardLeft from './DashboardLeft';
import DashboardRight from './DashboardRight';
import DashbaordBar from './DashboardBar';

const Dashboard = () => {
    return (
        <section className='dashboard'>
            <DashbaordBar></DashbaordBar>
            <DashboardLeft></DashboardLeft>
            <DashboardRight></DashboardRight>
        </section>
    );
};

export default Dashboard;