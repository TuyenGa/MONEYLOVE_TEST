const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const nunjucks = require('nunjucks')
const config = require('./config/config');
const mongoose = require('mongoose');
mongoose.connect(`${config.database}/${config.dbname}`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true 
})
app.engine('html', nunjucks.render)
app.set('view engine', 'html')

app.use('/api',require('./routes/routes')(express));

app.get('/',(req,res) => {
    res.render('show');
})

app.listen(config.port, () => {
    console.log(`app running is port ${config.port}`);
});

