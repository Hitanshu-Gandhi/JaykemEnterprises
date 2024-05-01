const dotenv = require("dotenv").config()
const express = require("express")
const connectdb = require('./config/connection')
const blogsRouter = require('./routes/blogs')
const productsRouter = require('./routes/products')
const cors = require('cors')

connectdb()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/products',productsRouter)
app.use('/blogs',blogsRouter)

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server started running at: ${PORT}`)
})