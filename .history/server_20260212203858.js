import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './configs/mongodb.js'

const app = express()

await connectDb()

app.use(cors())


app.get('/', (req, res) => res.send("API WORKING"))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})