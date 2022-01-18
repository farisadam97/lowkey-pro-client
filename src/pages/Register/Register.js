import React from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormRegister from "../../components/FormRegister/FormRegister.component";

const Register = () => {
    return(
        <Container maxWidth="xl">
            <Box sx={{ mt:3 ,  height: '100vh' }} >
                <Typography variant="h3" component="div" gutterBottom>
                    Register Page
                </Typography>
                <FormRegister />
            </Box>
        </Container>
    )
}

export default Register