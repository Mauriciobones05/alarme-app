const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para processar JSON
app.use(express.json());

// Configuração da conexão com o banco de dados
const db = mysql.createPool({
  host: 'localhost',
  user: 'bones',
  password: 'bones1',
  database: 'aplicativo',
});

// Rota de login
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      res.status(200).json({ mensagem: 'Login realizado com sucesso' });
    } else {
      res.status(400).json({ mensagem: 'Email e/ou senha inválidos' });
    }
  } catch (error) {
    console.error('Erro na consulta SQL:', error);
    res.status(500).json({ mensagem: 'Erro interno' });
  }
});

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
