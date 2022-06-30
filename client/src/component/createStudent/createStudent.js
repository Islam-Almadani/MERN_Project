import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from 'axios';


export default function Create() {
  const [student, setStudent] = useState({
    RegNum: 0,
    studentName: "",
    grade: "",
    section: "",
    subgects: "",
  });

  const deleteallStudent = (islam) => { axios.delete("http://localhost:5000/students").then().catch((error) => { console.log(error); }) }
  const createStudent = () => { axios.post("http://localhost:5000/students", student) }
  return (

    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Resistration Number" variant="outlined" value={student.RegNum} onChange={(event) => { setStudent({ ...student, RegNum: event.target.value }) }} />
        <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade}
          onChange={(event) => { setStudent({ ...student, grade: event.target.value }) }} />
        <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName}
          onChange={(event) => { setStudent({ ...student, studentName: event.target.value }) }} />
        <TextField id="outlined-basic" label="Section" variant="outlined" value={student.section}
          onChange={(event) => { setStudent({ ...student, section: event.target.value }) }} />
        <TextField id="outlined-basic" label="subject" variant="outlined" value={student.subgects}
          onChange={(event) => { setStudent({ ...student, subgects: event.target.value }) }} />
        <Button variant="outlined" onClick={createStudent}>Create</Button>
        <Button variant="outlined" onClick={deleteallStudent}>Delete all</Button>

      </Box>
    </div>
  );
}