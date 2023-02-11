import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import axios from 'axios';
import { Button } from '@mui/material';
import UpdateModal from './DashItems/UpdateModal/UpdateModal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
            



  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ViewBlogs() {



    const {url, user} = useContext(AuthContext);
   const [viewBlogs, setViewBlogs] = React.useState([]);
   const [isChange, setIsChange] = React.useState(false);
   
   React.useEffect( () =>{
    if(user?.email){
        axios.get(`${url}/blogs/${user.email}`)
        .then(res => setViewBlogs(res.data.result))
    }
    
   }, [url, user?.email ,isChange])
console.log(viewBlogs)


const handleUpdate = (id, data) => {
  // console.log(id, data);
  axios.put(`${url}/blogs/${id}`, {title:data})
  .then(res => {
    if(res.data.success){
      setIsChange(!isChange);
     }
  })

}


const handleDelete = (id) => {
 
       axios.delete(`${url}/blogs/${id}`)
       .then(res => {
             if(res.data.success){
              const newState = viewBlogs.filter(item=>item._id !== id);
              setViewBlogs(newState);
             }
       })
}


// const handleDelete = (id) =>{
//   axios.delete(`${url}/blogs/${id}`)
//   .then(res => {
//     if(res.data.success){
//       const newState = viewBlogs.filter(item => item._id !== id);
//       setViewBlogs(newState);
//     }
//   })
// }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">Author</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>


          {viewBlogs.map((row) => (
            
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.authorEmail}</StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right"> <UpdateModal blog={row} handleUpdate={handleUpdate} >  </UpdateModal> </StyledTableCell>
              <StyledTableCell align="right"><Button onClick={() =>handleDelete(row._id)}>Delete</Button></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}