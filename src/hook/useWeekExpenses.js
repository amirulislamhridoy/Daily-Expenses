import React, { useEffect, useState } from 'react';
// import useData from './useDate';

const useWeekExpenses = () => {
    // const [allExpenses] = useData()
    const today = new Date()
    const [weeklyDates, setWeeklyDate] = useState([])
    const [last1day, setLast1day] = useState(new Date(Date.now() - 86400000));
    const [last2day, setLast2day] = useState(new Date(new Date(last1day) - 86400000));
    const [last3day, setLast3day] = useState(new Date(new Date(last2day) - 86400000));
    const [last4day, setLast4day] = useState(new Date(new Date(last3day) - 86400000));
    const [last5day, setLast5day] = useState(new Date(new Date(last4day) - 86400000));
    const [last6day, setLast6day] = useState(new Date(new Date(last5day) - 86400000));
    const [last7day, setLast7day] = useState(new Date(new Date(last6day) - 86400000));
    useEffect(() => {
        setLast1day(`${(''+last1day)?.split(' ')[0]} ${(''+last1day)?.split(' ')[1]} ${(''+last1day)?.split(' ')[2]} ${(''+last1day)?.split(' ')[3]}`)
        setLast2day(`${(''+last2day)?.split(' ')[0]} ${(''+last2day)?.split(' ')[1]} ${(''+last2day)?.split(' ')[2]} ${(''+last2day)?.split(' ')[3]}`)
        setLast3day(`${(''+last3day)?.split(' ')[0]} ${(''+last3day)?.split(' ')[1]} ${(''+last3day)?.split(' ')[2]} ${(''+last3day)?.split(' ')[3]}`)
        setLast4day(`${(''+last4day)?.split(' ')[0]} ${(''+last4day)?.split(' ')[1]} ${(''+last4day)?.split(' ')[2]} ${(''+last4day)?.split(' ')[3]}`)
        setLast5day(`${(''+last5day)?.split(' ')[0]} ${(''+last5day)?.split(' ')[1]} ${(''+last5day)?.split(' ')[2]} ${(''+last5day)?.split(' ')[3]}`)
        setLast6day(`${(''+last6day)?.split(' ')[0]} ${(''+last6day)?.split(' ')[1]} ${(''+last6day)?.split(' ')[2]} ${(''+last6day)?.split(' ')[3]}`)
        setLast7day(`${(''+last7day)?.split(' ')[0]} ${(''+last7day)?.split(' ')[1]} ${(''+last7day)?.split(' ')[2]} ${(''+last7day)?.split(' ')[3]}`)
        setWeeklyDate([last1day, last2day, last3day, last4day, last5day, last6day, last7day])
    }, [last1day, last2day, last3day, last4day, last5day, last6day, last7day])
    return [weeklyDates]
};

export default useWeekExpenses;