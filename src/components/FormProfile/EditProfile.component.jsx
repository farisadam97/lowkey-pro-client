import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useForm,handleSubmit} from "react-hook-form";
import styles from "./Editprofile.module.css";
import { FormGroup, Container, Grid } from "@mui/material";
import { getPlayersById, updatePlayerById } from "../../services/user.service";

const FormRegister = () => {

    const { register,formState: { errors }, handleSubmit,setError} = useForm();
    const onSubmit = data => {
        updatePlayerById(data);
        console.log(data);
    };

    
    const [playerData, setplayerData] = useState();
    useEffect(()=>{
        const fetchData = async () =>{
           const data = await getPlayersById();
           setplayerData(data.message)
        }
        fetchData()
    }, [])


    return(
        <>
        { playerData &&
        <>
            <Card sx={{ minWidth: 275 }} >
            <Container maxWidth="xl">
                {/* <Box  className={styles.kotakkolom}>
                    <img src="logo192.png" alt="" srcset="" />
                    <Button>Change Photo</Button>
                </Box> */}
                <Container maxWidth="md" component="form" noValidate sx={{mx:"auto"}} onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Input 
                                key={playerData.id}
                                type="hidden" 
                                disableUnderline={true} 
                                style={{display:"none"}}
                                name="id" 
                                placeholder="e.g : John Doe"  
                                autoComplete=""
                                defaultValue={playerData.id || undefined}
                                {...register("id", { required: true})}
                            >

                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>Full Name</InputLabel>
                            <Input 
                                type="text" 
                                disableUnderline={true} 
                                sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                                name="fullname" 
                                placeholder="e.g : John Doe"  
                                autoComplete=""
                                defaultValue={playerData.name || undefined}
                                {...register("fullname", { required: true})}
                            >

                            </Input>
                            {
                                errors.fullname?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
                            }
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>Email</InputLabel>
                                <Input 
                                    type="email" 
                                    disableUnderline={true} 
                                    sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                                    name="email"  
                                    defaultValue={playerData.email || undefined}
                                    placeholder="e.g : johndoe@gmail.com"
                                    {...register("email", { required: true})}
                                >

                                </Input>
                                {
                                    errors.email?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
                                }
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>Bio</InputLabel>
                                <Input 
                                    type="text" 
                                    disableUnderline={true} 
                                    sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                                    name="bio"  
                                    defaultValue={playerData.bio || undefined}
                                    placeholder="e.g : Saya seorang Full Stack Developer"
                                    {...register("bio")}
                                >

                                </Input>
                                {
                                    errors.username?.type === 'required' && <Typography sx={{color:"red"}} component="div" gutterBottom>Required</Typography>
                                }
                    </FormGroup>
                    <br />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormGroup>
                                <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>City</InputLabel>
                                        <Input 
                                            type="text" 
                                            key="key1"
                                            disableUnderline={true} 
                                            sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                                            name="city"
                                            defaultValue={playerData.city || undefined}
                                            placeholder="e.g : Bogor"
                                            {...register("city")}
                                        >

                                        </Input>
                                        {
                                            errors.password?.message && <Typography sx={{color:"red"}} component="div" gutterBottom> {errors.password?.message} </Typography>
                                        }
                            </FormGroup>
                        </Grid>
                        <Grid item xs={6}>
                            <FormGroup>
                                <InputLabel sx={{mb:1,fontSize:16,fontWeight: 'bold' }}>Social Media URL</InputLabel>
                                        <Input 
                                            type="text" 
                                            disableUnderline={true} 
                                            sx={{border:1, px:1,borderRadius:1,width:"100%"}} 
                                            name="social_media_url" 
                                            defaultValue={playerData.social_media_url || undefined}
                                            placeholder="e.g: instagram.com"
                                            {...register("social_media_url")}
                                        >

                                        </Input>
                                        {
                                            errors.password?.message && <Typography sx={{color:"red"}} component="div" gutterBottom> {errors.password?.message} </Typography>
                                        }
                            </FormGroup>
                        </Grid>
                    </Grid>
                    <FormGroup>
                        <Button type="submit" variant="contained" sx={{width:"100%" , my:2}}>Edit  </Button>
                    </FormGroup>
                </Container>
            </Container>
        </Card>
        </>
        }
        </>
    )
}

export default FormRegister