import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from '@mui/material';
import UpdateModal from './DashItems/UpdateModal/UpdateModal';
import { AuthContext } from '../../contexts/AuthProvider';
import axios from 'axios';


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


const MangeUsers = () => {

    const {url}= React.useContext(AuthContext)
const [users, setUsers] = React.useState([]);
console.log(users);

React.useEffect(()=>{
        axios.get(`${url}/users/get`)
        .then(res => setUsers(res.data.result))
},[url])

const handleMakeAdmin = (id) =>{
      axios.patch(`${url}/users/make-admin`)
}


    return (
        <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell>Make-Admin</StyledTableCell>
           
          
          </TableRow>
        </TableHead>
        <TableBody>


          {users.map((item, index) => (
            
            <StyledTableRow key={item+index} >
              <StyledTableCell component="th" scope="row">
               {index+1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
              {item.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
             {item.email}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
            {item?.role==="admin"?"Admin":"User"}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
         {
            item?.role==="admin"?  <Button  disabled>Make-admin</Button> 
            :
            <Button onClick={()=>handleMakeAdmin(item._id)}>Make-admin</Button>
         }
              </StyledTableCell>
                     
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MangeUsers;
