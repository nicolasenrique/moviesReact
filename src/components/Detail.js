import React from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'

const Detail = () => {

  let token = sessionStorage.getItem('token');

  return (
    <div>
    {!token && <Navigate replace to="/" />}
    <div>Detail</div>
    </div>
  );
}

export default Detail;