import student from "../modles/students.js"

export const getstudent = async (req, res) => {
    try {
        const allStudent = await student.find()
        res.status(200).json(allStudent)
    } catch (error) {
        res.status(404).json({ massage: error.massage() })
    }
}

export const deleteallStudent = async (req, res) => {
    try {
        const allstudent = await student.deleteOne()
        res.status(202).json(allstudent)
    } catch (error) {
        res.status(204).json({ massage: error.massage() })
    }
}

export const createstudent = async (req, res) => {
    const newStudent = new student(req.body);
    try {
        await newStudent.save()
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(409).json({ massage: error.massage })
    }
}

