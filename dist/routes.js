"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _EmailController = require('./app/controllers/EmailController'); var _EmailController2 = _interopRequireDefault(_EmailController);

const routes = new (0, _express.Router)();

routes.get('/', (req, res) => res.json({ ok: true }));
routes.post('/emails', _EmailController2.default.store);
routes.get('/emails', _EmailController2.default.index);

exports. default = routes;
