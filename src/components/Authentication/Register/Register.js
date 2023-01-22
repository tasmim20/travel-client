import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Register = () => {
    const { register, handleSubmit,watch} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [ signUpError, setSignUpError] = useState('');
    const handleRegister = (data)=>{
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('User Created Successfully.');
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(error => console.log(error))
        })
        .catch(error=>{
            console.log(error)
            setSignUpError(error.message);
        })
    }

  console.log(watch("example"));
    return (
        <div>
           <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
            <Box sx={{width:{md:"20rem", xs:'auto'}}}>
                <Box  component='form'
                    onSubmit={handleSubmit(handleRegister)}
                    sx={{ backgroundColor: '#f8bbd0', px: 3, py: 5 }}>
                    <Typography variant='h5' gutterBottom sx={{mb:3, fontWeight:700, color:'#e91e63', textAlign:'center'}}>Register Now</Typography>
                    <Stack spacing={2} direction="column">
                        <TextField
                            label="Full Name"
                            id="outlined-size-small"
                            type='name'
                            size="small"
                            {...register("name", { required: 'Name is required' })}
                        />
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            type='email'
                            size="small"
                            {...register("email", { required: 'Email is required' })}
                        />
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            type='password'
                            size="small"
                            {...register("password", { required: 'Password is Required',minLength:{value:6, message:'Password must be 6 Characters or longer'} })}
                        />
                              {/* {errors.email && <span sx={{backgroundColor:'#f44336'}}>This field is required</span>} */}
                        <Button type='submit' variant="contained" sx={{backgroundColor:'#ec407a'}}>Register</Button>
                        {signUpError && <p>{signUpError}</p>}
                        <div sx={{display:'flex'}}><small>Already have an account.?</small> <small><Link to='/login'>Login</Link></small></div>
                       
                    </Stack>

                </Box>
  
            </Box>
           </Box>
        </div>
    );
};

export default Register;
