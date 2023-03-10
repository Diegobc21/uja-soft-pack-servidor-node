import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// Conexión al cluster
const uri = process.env.DB_URI || 'mongodb://localhost:27017/local'

// Opciones para el cliente
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.set('strictQuery', false)

export default {
  connect: function () {
    mongoose.connect(
      uri, options, (err) => {
        if (!err) {
          console.log('MongoDB conectado')
        } else {
          console.error(err)
        }
      }
    )
  }
}
