import { BloodtypeOutlined } from '@mui/icons-material';
import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const OurBlogs = () => {
           const [blogs, setBlogs] = useState([]);

           useEffect(() =>
           {
               axios.get('http://localhost:5000/blogs')
               .then(res => setBlogs(res.data.result))  
           } ,[])

    return (
      <Container>
      <Typography variant="h3" gutterBottom>
          Explore our latest blogs
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={1} sx={{
          justifyContent: 'center',
      }}
      >
          {
              [...blogs].map(blog => <SingleBlog
                  key={blog._id}
                  blog={blog}
              />)
          }


      </Grid>
  </Container>
    );
};

export default OurBlogs;