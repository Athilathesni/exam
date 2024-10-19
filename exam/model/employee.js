import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    empid: { type: Number }, 
    name: { type: String },
    designation: { type: String },
    experience: { type: String },
    salary: { type: Number },
    email: { type: String },
    phone: { type: Number }
});


export default mongoose.model.Employee||mongoose.model('Employee',employeeSchema)