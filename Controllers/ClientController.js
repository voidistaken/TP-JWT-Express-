import clientModel from '../models/Client.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';
dotenv.config();

export async function GetAllClients(req, res) {
    const clients = await clientModel.find();
    res.json(clients);
}

export async function GetClientById(req, res) {
    const client = await clientModel.findById(req.params.id);
    res.json(client);
}

export async function CreateClient(req, res) {
    let client = req.body;
    
    if (client.password !== client.confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    const salt = await bcrypt.genSalt();
    client.password = await bcrypt.hash(client.password, salt);
    
    delete client.confirmPassword;
    
    const newClient = await clientModel.create(client);
    res.status(201).json(newClient);
}

export async function DeleteClient(req, res) {
    const client = await clientModel.findByIdAndDelete(req.params.id);
    res.status(200).json(client);
}

export async function UpdateClient(req, res) {
    const client = await clientModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(client);
}

export async function Login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email et mot de passe sont requis" });
        }

        const client = await clientModel.findOne({ email });
        if (!client) {
            return res.status(404).json({ error: "Email ou mot de passe incorrect" });
        }

        const isMatch = await bcrypt.compare(password, client.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Email ou mot de passe incorrect" });
        }

        const SECRET_KEY = process.env.SECRET_KEY || 'defaultSecretKey123456';
        if (!process.env.SECRET_KEY) {
            console.warn("Warning: SECRET_KEY is not defined in .env! Using fallback key.");
        }

        const token = jwt.sign({ email: client.email, id: client._id }, SECRET_KEY, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
}
