import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';





export const ButtonNavbar = () =>{

    const onLogoutClick =  (e) => {
        e.preventDefault();
        window.localStorage.clear();
        alert("Anda telah logout");
    }
    const isUserLogin = localStorage.getItem('status');
    return (
        <>
            {
              isUserLogin === "Login Success" ? 
              (
                <>
                  <Button variant="contained"> 
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to="/home-page">
                      My Profile
                    </Link>
                  </Button>
                  <Button variant="contained" color="error" onClick={onLogoutClick}> 
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to="/login">
                      Logout
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="contained"> 
                  <Link style={{ textDecoration: 'none', color: '#fff' }} to="/register">
                    Sign Up
                  </Link>
                  </Button>
                  <Button variant="contained">
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to="/login">
                      Login
                    </Link>
                  </Button>
                </>
              ) 
            }
        </>
    )
}