const Express = require('express')

const app = Express()

app.use((req, res, next) => {
    const {method,path} = req;
    console.log(`Request with method ${method} to ${path}  at ${new Date()}.`)
    next();
})

app.get('/', (req,res) =>{
    res.send("Hello, World");
})



const PORT = 4545

app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`)
})