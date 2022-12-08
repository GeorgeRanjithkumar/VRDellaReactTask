// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Button from "../../components/Button";
// import { deleteUser } from "./userSlice";

// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];
// const dispatch = useDispatch();
// const users = useSelector(store => store.users);

// const handleRemoveUser = (id) => {
//     dispatch(deleteUser({ id }));
// }


// export default function BasicTable() {
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Dessert (100g serving)</TableCell>
//                         <TableCell align="right">Calories</TableCell>
//                         <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                         <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {users.map((user) => (
//                         <TableRow
//                             key={user.id}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell align="right">{user.name}</TableCell>
//                             <TableCell align="right">{user.email}</TableCell>
//                             <TableCell align="right">{user.contact}</TableCell>
//                             <TableCell align="right">{user.comments}</TableCell>
//                             <TableCell align="right"><Link to={`edit-user/${user.id}`}>
//                                 <button>
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                                     </svg>
//                                 </button>
//                             </Link>
//                             </TableCell>
//                             <TableCell>
//                                 <button
//                                     onClick={() => handleRemoveUser(user.id)}
//                                 >
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                     </svg>
//                                 </button></TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }