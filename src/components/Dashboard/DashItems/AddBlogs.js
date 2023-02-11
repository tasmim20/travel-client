import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';


const AddBlogs = () => {
    const { user, url} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const date = new Date().toDateString();
        const newBlog = {
            date,
            authorEmail: user.email,
            ...data
        }
        console.log(newBlog);

        axios.post(`${url}/blogs`, newBlog)
        .then(res =>{
            if(res.data.success){
                alert('success');
            }
            else{
                alert(res.data.message)
            }
        })

        // axios.post(`${url}/blog`, newBlog)
        //     .then(res => {
        //         if (res.data.success) {
        //             alert('Success');
        //         }
        //         else {
        //             alert(res.data.message);
        //         }
        //     });



    };
    return (
        <Container sx={{ width: { md: '20rem', sm: '100%' } }}>

            <Box style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
            }}>
                <Box sx={{
                    width: { md: 345, xs: 1 },
                    mx: { md: 0, xs: 2 },

                }}>
                    <Box
                        component='form'
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{ backgroundColor: '#ddd', px: 3, py: 5, borderRadius: 2, }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Add New Blog
                        </Typography>
                        <Stack spacing={2} direction="column">
                            <TextField
                                label="Blog title"
                                id="outlined-size-small"
                                type='text'
                                size="small"
                                {...register("title", { required: true })}
                            />
                            <TextField
                                label="Image URL"
                                id="outlined-size-small"
                                type='text'
                                size="small"
                                {...register("image", { required: true })}
                            />
                            <TextField
                                label="Blog Short Description"
                                id="outlined-size-small"
                                type='text'
                                size="small"
                                {...register("description", { required: true })}
                            />
                            <Button type='submit' variant="contained">Add Blog</Button>

                        </Stack>
                    </Box>

                </Box>

            </Box>
        </Container>
    );
};

export default AddBlogs;