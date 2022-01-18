import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormProfile from "../../components/FormProfile/EditProfile.component";
import NavBar from "../../components/navbar/navbar.component";

const Register = () => {
    return(
        <Container maxWidth="xl">
            <NavBar />
            <Box sx={{ mt:3 ,  height: '100vh' }} >
                <Typography variant="h3" component="div" gutterBottom>
                    My Profile
                </Typography>
                <FormProfile />
            </Box>
        </Container>
    )
}

export default Register