import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
    const cekValidasi = localStorage.getItem('status'); 

    const alertMessage = alert("Silahkan login terlebih dahulu, sebelum mengakses page tersebut!");
    return (
        <>
            {cekValidasi === "Login Success" ? 
            (<Outlet />) : 
            (
                <> 
                    {alertMessage}
                    <Navigate to="/login" />
                </>
                
            )
            }
        </>
    )
}