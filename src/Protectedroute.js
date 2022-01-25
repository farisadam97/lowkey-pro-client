import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// const alertMessage = alert("Silahkan login terlebih dahulu, sebelum mengakses page tersebut!");
export const ProtectedRoute = () => {
    const cekValidasi = localStorage.getItem('status'); 
    return (
        <>
            {cekValidasi === "Login Success" ? 
            (
                <Outlet />
            ) : 
            (
               <Navigate to="/login" />        
            )
            }
        </>
    )
}