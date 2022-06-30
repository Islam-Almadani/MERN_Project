import express from "express";
import {getstudent ,createstudent,deleteallStudent} from "../controlers/students.js";


const router = express.Router() ;

router.get('/',getstudent);
router.post('/' , createstudent)
router.delete('/' , deleteallStudent)

export default router