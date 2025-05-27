const Router = require('express');
const Agenda = require('../models/AgendaModel.js');
const agendaController = require('../controllers/AgendaController.js');
const routes = Router();

routes.get('/agenda', agendaController.getAll);
routes.post('/agenda/adicionar', agendaController.post);
routes.delete('/agenda/:id', agendaController.deleteAgenda);

module.exports = routes;
