import React, {useState} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {postLoginAxios} from '../../services/auth.service';

import { useForm, Controller } from "react-hook-form";
import { TextField, Checkbox, Input } from "@material-ui/core";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function FormLogin() {
  const { handleSubmit, formState: { errors }, control, reset } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const onSubmit = data => {
    const dataJSON = JSON.stringify(data);
    postLoginAxios(dataJSON);
  };

  ;
  const gridFormStyle = {
    padding: "50px"
  }

  const textFieldStyle = {
    width: '60%',
    marginBottom: "20px",
    border: 1, 
    px: 1,
    borderRadius: 1,
    width: "100%"
  }

  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent style={gridFormStyle}>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="label">Username</label>
            <Controller
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="Username" />
            }
            />
            {
              errors.username?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            <label htmlFor="label">Password</label>
            <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="password" style={textFieldStyle} placeholder="Password" />
            }
            />
            {
              errors.password?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
            }
            <br/>
            <Button type="submit" variant="contained" sx={{width:"100%" , my:2}}>Submit</Button>
            <p style={{textAlign: "right"}}>Lost Password? | Register Now!</p>
          </form>
        </Container>
      </CardContent>
      
    </Card>
  );
}

