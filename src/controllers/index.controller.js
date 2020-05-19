const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'registro',
    port: '5432'
});

const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuarios ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
    const { email, telefone, whatsapp } = req.body;
    const response = await pool.query('INSERT INTO usuarios (email, telefone, whatsapp) VALUES ($1, $2, $3)', [email, telefone, whatsapp]);
    res.json({
        message: 'Usuário Criado com Sucesso!',
        body: {
            user: { email, telefone, whatsapp }
        }
    })
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { email, telefone, whatsapp } = req.body;

    const response = await pool.query('UPDATE usuarios SET email = $1, telefone = $2, whatsapp = $3 WHERE id = $4', [
        email,
        telefone,
        whatsapp,
        id
    ]);
    res.json('Usuário Atualizado com Sucesso!');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM usuarios where id = $1', [
        id
    ]);
    res.json('Usuário ${id} Deletado com Sucesso!');
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};