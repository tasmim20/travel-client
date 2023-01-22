import { BloodtypeOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const OurBlogs = () => {
    return (
        <div >
            <Typography variant="h3" component="h2" sx={{mt:12,mb:5, fontWeight:700, color:"#f73378"}}>
  Explore Our latest Blogs
</Typography>;
       <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
           <SingleBlog></SingleBlog>
          </Grid>
        ))}
      </Grid>
        </div>
    );
};

export default OurBlogs;