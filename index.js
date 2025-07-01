'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("node:https");
var tls = require("node:tls");
var agent = new https.Agent();
agent.createConnection = function createConnection(options) {
    options.servername = 'hello';
    options.session = Buffer.from('hello');
    return tls.connect(options);
};
