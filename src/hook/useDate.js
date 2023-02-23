import React, { useEffect } from 'react';
import { useState } from 'react';

const useDate = () => {
    const [allExpenses, setAllExpenses] = useState([])
    useEffect(() => {
        fetch('https://daily-expenses-server.vercel.app/getAll')
        .then(res => res.json())
        .then(data => {
            setAllExpenses(data)
        })
    }, [])
    return [allExpenses];
};

export default useDate;

// readme.md file edit and send for comment