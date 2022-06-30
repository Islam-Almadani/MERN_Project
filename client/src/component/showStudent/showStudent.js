import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";


export default function Student() {

  const [studentList, setstudentList] = useState([]);
  axios.get("http://localhost:5000/students").then((response) => { setstudentList(response.data) }).catch((error) => { console.log(error.massage); })
  // const deleteallStudent = (islam) => {axios.delete("http://localhost:5000/students").then((response) => {console.log(islam);}).catch((error) => { console.log(error); }) }
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>student Name</TableCell>
            <TableCell align="right">resisstration Number</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">section</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student) => (
            <TableRow
              Sx={{ '&: last-child td, &: last-child th': { border: 0 } }}>
              <TableCell>{student.studentName}</TableCell>
              <TableCell align="right">
                {student.RegNum}
              </TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}