const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const appStatic = path.join(__dirname,'/dist/cctx-audioverse');
app.use(compression());
app.use(express.static(appStatic));
app.get('/*',(req,res) => res.sendFile(appStatic + '/index.html'));
app.listen(process.env.PORT || 8080);