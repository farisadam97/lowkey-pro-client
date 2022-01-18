import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormProfile from "../../components/FormProfile/EditProfile.component";
import NavBar from "../../components/navbar/navbarlogin.component";

const Register = () => {
    return(
        <div>
             <NavBar />
        <Container maxWidth="xl">
           
            <Box sx={{ mt:3 ,  height: '100vh' }} >
                <Typography variant="h3" component="div" gutterBottom>
                    My Profile
                </Typography>
                <FormProfile />
            </Box>
        </Container>
        </div>
    )
}

export default Register