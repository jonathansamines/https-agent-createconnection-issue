'use strict';

import * as https from 'node:https';
import * as tls from 'node:tls';

const agent = new https.Agent();

agent.createConnection = function createConnection(options) {
    options.servername = 'hello';
    options.session = Buffer.from('hello');
    return tls.connect(options);
}
