const express = require('express');
const sequelize = require('./config/db.js');
const AgendaModel = require('./models/AgendaModel.js');
const PhoneModel = require('./models/PhoneModel.js');
const router = require('./routes/Router.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    await sequelize.sync(); // Sincroniza modelos
    console.log('Modelos sincronizados com o banco de dados.');

    app.listen(8000, () => {
      console.log('Servidor ouvindo na porta 3000.');
    });
  } catch (error) {
    console.error('Erro ao conectar ou sincronizar com o banco:', error);
  }
}

startServer();
