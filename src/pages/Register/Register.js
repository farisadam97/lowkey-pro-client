import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormRegister from "../../components/FormRegister/FormRegister.component";
import NavBar from "../../components/navbar/navbar.component";

const Register = () => {
    return(
        <div>
             <NavBar />
        <Container maxWidth="xl">
            <Box sx={{ mt:3 ,  height: '100vh' }} >
                <Typography variant="h3" component="div" gutterBottom>
                    Register Page
                </Typography>
                <FormRegister />
            </Box>
        </Container>
        </div>
    )
}

export default Register