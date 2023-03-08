import express from 'express'
import softwareRoutes from './routes/softwareRoutes.js'
import corsOptions from './middlewares/cors.js'
import dotenv from 'dotenv'
import db from './config/db.js'

db.connect()
dotenv.config()

const port = process.env.PORT || 3000

const app = express()

app.use(corsOptions)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('', (req, res) => {
  res.send('Servidor de UJA-Soft-Pack')
})

app.use('/software', softwareRoutes)

app.listen(port, () => {
  console.log(`Servidor funcionando en puerto ${port}`)
})
