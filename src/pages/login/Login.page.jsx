import React from 'react';
import Container from '@mui/material/Container';
import Navbar from '../../components/navbar/navbar.component';
import FormLogin from '../../components/form-login/formLogin.component';

const loginPage = () => {
    return(
        <>
         <Navbar />
         <Container maxWidth="xl">
             <h1>Login Page</h1>
            <Container maxWidth="lg">
                <FormLogin />
            </Container>
         </Container>
        </>
    )
}

export default loginPage;