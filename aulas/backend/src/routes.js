const express = require('express');

const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionContoller');




const routes = express.Router();


routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs',OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);


module.exports = routes;