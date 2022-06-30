import mongoose from "mongoose";

const studentSchama = mongoose.Schema({
    RegNum: Number,
    studentName: String,
    grade: String,
    section: { type: String, default: "Cs" },
    subjects: [String],
})

const student = mongoose.model('student', studentSchama)
export default student