const Express = require('express')

const app = Express()

app.get('/', (req,res) =>{
    res.send("Hello, World");
})



const PORT = 4545

app.listen(PORT, () =>{
    console.log(`Running on http://localhost:${PORT}`)
})