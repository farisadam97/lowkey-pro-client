import React from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm,handleSubmit} from "react-hook-form";

const FormRegister = () => {
    const { register,formState: { errors }, handleSubmit,setError} = useForm();
    const onSubmit = data => {

        console.log(data)
    };

    return(
        <Box sx={{width:'45wh',p:3, mt:5,border: 1,borderRadius:4,borderColor:'grey.500'}}>
            <Box component="form" noValidate sx={{mx:"auto"}} onSubmit={handleSubmit(onSubmit)} maxWidth={"md"}>
                <Box className="" sx={{my:1}}>
                    <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>Full Name</InputLabel>
                    <Input 
                        type="text" 
                        disableUnderline={true} 
                        sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                        name="fullname" 
                        placeholder="e.g : John Doe"  
                        autoComplete=""
                        {...register("fullname", { required: true})}
                    >

                    </Input>
                    {
                        errors.fullname?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
                    }
                </Box>
                <Box className="" sx={{my:1}}>
                    <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>Email</InputLabel>
                    <Input 
                        type="email" 
                        disableUnderline={true} 
                        sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                        name="email"  
                        placeholder="e.g : johndoe@gmail.com"
                        {...register("email", { required: true})}
                    >

                    </Input>
                    {
                        errors.email?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
                    }
                </Box>
                <Box className="" sx={{my:1}}>
                    <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>Username</InputLabel>
                    <Input 
                        type="text" 
                        disableUnderline={true} 
                        sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                        name="username"  
                        placeholder="e.g : johndoe"
                        {...register("username", { required: true})}
                    >

                    </Input>
                    {
                        errors.username?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
                    }
                </Box>
                <Box className="" sx={{my:1}}>
                    <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>Password</InputLabel>
                    <Input 
                        type="password" 
                        disableUnderline={true} 
                        sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                        name="pasword" 
                        placeholder="Min. length 8 characters"
                        {...register("password", { minLength: {value:8,message: "Minimal 8 characters"}})}
                    >

                    </Input>
                    {
                        errors.password?.message && <Typography sx={{color:"red"}} component="div" gutterBottom> {errors.password?.message} </Typography>
                    }
                </Box>
                <Button type="submit" variant="contained" sx={{width:"100%" , my:2}}>Submit  </Button>
            </Box>
        </Box>
    )
}

export default FormRegister