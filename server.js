import express from 'express';
import { join } from 'path';
import serveStatic from 'serve-static';
const app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);

app.route('/*')
  .get(function (req, res) {
    res.sendFile(join(__dirname + '/dist/index.html'))
  })
