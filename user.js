import mongoose from 'mongoose';
// import { email, lowercase } from 'zod';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
    },
    doshaType:{
        type: String,
        default: 'unknown',
    }
},
{ timestamps: true });

const User = mongoose.model('User',  userSchema);

export default User;