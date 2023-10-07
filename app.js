import express from 'express'
import cors from 'cors'
import resultsRouter from './src/routes/results.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000

app.use('/api/v1/result', resultsRouter)

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})