import  express from 'express';
const router=express.Router();
import * as ClientController from '../Controllers/ClientController.js';
router.get('/',ClientController.GetAllClients);
router.get('/;id',ClientController.GetClientById);
router.post('/',ClientController.CreateClient);
router.delete('/:id',ClientController.DeleteClient);
router.patch('/:id',ClientController.UpdateClient);
router.post('/login',ClientController.Login);

export default router;

