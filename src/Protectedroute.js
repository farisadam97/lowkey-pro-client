import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
    const cekValidasi = localStorage.getItem('status'); 

    return (cekValidasi === "Login Success" ? <Outlet /> : <Navigate to="/login" />);
}