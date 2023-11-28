const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
const port = 3001;
const db = require('/Dev/alarme-app/backend/database');
const rota = require('/Dev/alarme-app/backend/routes/authRoutes');

const db2 = mysql.createPool({
  host: 'localhost',
  user: 'bones',
  password: 'bones1',
  database: 'aplicativo',
});

// Configuração do middleware para permitir requisições JSON
app.use(express.json());
app.use(cors());



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios ORDER BY id',(err,result) => {
    if(err){
      res.send(err);
    }
    res.send(result);
  })
});

app.post('/cadastro', async (req, res) => {
  const resultadoCadastro = await rota.insertUsuario(req.body);

  // Verifique o status retornado pela função insertUsuario
  if (resultadoCadastro.status === 201) {
    return res.status(201).json({ mensagem: 'Registro bem-sucedido' });
  } else if (resultadoCadastro.status === 400) {
    return res.status(400).json({ mensagem: 'Email já está em uso' });
  } else {
    return res.status(500).json({ mensagem: 'Erro interno' });
  }
});


app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const [rows] = await db2.execute('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);

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


// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
