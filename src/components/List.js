import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const List = () => {
    const history = useNavigate();

    

    useEffect(() => {
        const token = localStorage.getItem('token');
    if (token === null) {
        history('/');
    }
    }, []);


  return (
    <div>List</div>
  )
}

export default List