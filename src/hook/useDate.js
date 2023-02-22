import React, { useEffect } from 'react';
import { useState } from 'react';

const useDate = () => {
    const [allExpenses, setAllExpenses] = useState([])
    useEffect(() => {
        fetch('expenses.json')
        .then(res => res.json())
        .then(data => {
            setAllExpenses(data)
        })
    }, [])
    return [allExpenses];
};

export default useDate;