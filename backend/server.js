const express = require('express')
const app = express()

// routes
app.get('/', (req, res)=>{
    res.send('Welcome to DUSP')
})

app.get('/blog', (req, res)=>{
    res.send('Welcome to DUSP Blogsssss.....')
})

app.listen(3000, ()=>{
    console.log('Server is Running on PORT 3000')
})
