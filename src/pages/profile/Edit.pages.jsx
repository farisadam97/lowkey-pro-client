import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormProfile from "../../components/FormProfile/EditProfile.component";
import NavBar from "../../components/navbar/navbar.component";

const Register = () => {
    return(
        <div>
             <NavBar />
        <Container maxWidth="xl">
            <Typography variant="h3" component="div" gutterBottom>
                        My Profile
            </Typography>
            <Container maxWidth="lg">
                
                <FormProfile />
            </Container>
        </Container>
        </div>
    )
}

export default Register