const Express = require('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const app = Express()
const index = require('./routes/index.js')
app.set('view engine', 'ejs')

// app.use((req, res, next) => {
    // const {method,path} = req;
    // console.log(`Request with method ${method} to ${path}  at ${new Date()}.`)
    // next();
// })

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))

app.use(Express.static(path.join(__dirname, 'public')))






app.use('/', index);
const PORT = 4545

app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`)
})