import React, {useState} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

// export default function BasicCard() {
//   const { register, handleSubmit } = useForm();
//   const [result, setResult] = useState("");
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//       <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
//       <input {...register("firstName")} placeholder="First name" />
//       <input {...register("lastName")} placeholder="Last name" />
//       <select {...register("category")}>
//         <option value="">Select...</option>
//         <option value="A">Category A</option>
//         <option value="B">Category B</option>
//       </select>
//       <p>{result}</p>
//       <input type="submit" />
//     </form>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

export default function FormLogin() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });
  const onSubmit = data => console.log(data);

  const gridFormStyle = {
    // backgroundColor:"red",
    textAlign:"center",
    padding: "50px"
  }

  const textFieldStyle = {
    width: '60%',
    marginBottom: "30px"
  }

  return (
    <Card sx={{ minWidth: 275 }} >
      <CardContent style={gridFormStyle}>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
            
            name="username"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} type="text" style={textFieldStyle} placeholder="Username" />}
            />
            <br/>
            <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} type="password" style={textFieldStyle} placeholder="Password" />}
            />
            <br/>
            <Button type="submit" variant="contained" size="large">Submit</Button>
            <p>Lost Password?</p>
            <p>Register</p>
          </form>
        </Container>
      </CardContent>
      
    </Card>
  );
}

