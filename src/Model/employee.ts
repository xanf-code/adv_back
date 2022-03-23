import mongoose from 'mongoose';
import { EmployeeInterface } from '../Interface/EmployeeInt';

const employeeSchema = new mongoose.Schema<EmployeeInterface>({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    gender: {
        type: String,
    },
    department: {
        type: String,
    },
    joined: {
        type: Number,
    },
    language: {
        type: String,
    },
    age: {
        type: Number,
    },
    country: {
        type: String,
    },
    city: {
        type: String,
    },
    skills: {
        type: String,
    },
})

export default mongoose.model<EmployeeInterface>('Employee', employeeSchema);
