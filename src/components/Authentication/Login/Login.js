import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../../../contexts/AuthProvider';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signIn,providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

  
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => console.error(error))
      }
  
  const handleLogin = data =>{
    console.log(data)
    setLoginError('');
    signIn(data.email, data.password)
    .then(result =>{
        const user = result.user;
        console.log(user)
        navigate(from, {replace: true})
    })
    .catch(error=>{
        console.log(error.message);
        setLoginError(error.message);
    });
  }

    return (
        <div>
           <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
            <Box sx={{
                width: { md: 345, xs: 1 },
                mx: { md: 0, xs: 2 },

            }}>
                <Box  component='form'
                    onSubmit={handleSubmit(handleLogin)}
                    sx={{ backgroundColor: '#f8bbd0', px: 3, py: 5 }}>
                    <Typography variant='h5' gutterBottom sx={{textAlign:'center', mb:3}}>Login</Typography>
                    <Stack spacing={2} direction="column">
                        <TextField
                            label="Email"
                            id="outlined-size-small"
                            type='email'
                            size="small"
                            {...register("email", { required: 'Email Address is Required' })}
                            
                        />
                        {errors.email && <small role="alert" sx={{color:'#f44336'}}>{errors.email?.message}</small>}
                        <TextField
                            label="Password"
                            id="outlined-size-small"
                            type='password'
                            size="small"
                            {...register("password", { required: 'Password is Required'})}
                        />
                         {errors.password && <small role="alert" sx={{color:'#f44336'}}>{errors.password?.message}</small>}
                        <small sx={{pr: 10, mr:10, fontWeight:700}} >Forget Password?</small>
                              
                        <Button type='submit' variant="contained" sx={{backgroundColor:'#ec407a'}}>Login</Button>
                        <div>{loginError && <small>{loginError}</small>}
                        </div>
                        <div sx={{display:'flex'}}><small>New to travel-agency.?</small> <small><Link to='/register'>Create an Account</Link></small></div>
                    </Stack>
                  
                    <Button onClick={handleGoogleSignIn} type='submit' variant="contained'" sx={{backgroundColor:'#ec407a', color:'#f3e5f5' ,px:5, my:2}}>Continue with Google</Button>

                </Box>
  
            </Box>
           </Box>
        </div>
    );
};

export default Login;
