import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: { type: String},
    adresse: { type: String, required: true },
});

const clientModel = mongoose.model("client", ClientSchema);

export default clientModel;