//[SECTION] Modules and Dependencies
import mongoose from 'mongoose';

//[SECTION] Schema/Blueprint 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is Required']
    },
    password: {
        type: String,
        required: [true, 'Password is Required']
    }
});

//[SECTION] Model
const User = mongoose.model('User', userSchema);
export default User;