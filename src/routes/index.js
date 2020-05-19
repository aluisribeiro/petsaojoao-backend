const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/index.controller');

router.get('/registro', getUsers);
router.get('/registro/:id', getUserById);
router.post('/registro', createUser);
router.put('/registro/:id', updateUser)
router.delete('/registro/:id', deleteUser);

module.exports = router;