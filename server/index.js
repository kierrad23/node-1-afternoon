const express = require('express');
const bp = require('body-parser');
const mc = require( __dirname + '/controllers/messages_controller');

const app = express();

app.use( bp.json() );
app.use( express.static( __dirname + '/../public/build' ) );

const messagesURL = "/api/messages";
app.post( messagesURL, mc.create );
app.get( messagesURL, mc.read );
app.put( `${messagesURL}/:id`, mc.update );
app.delete( `${messagesURL}/:id`, mc.delete );

const port = 3004;
app.listen(port)