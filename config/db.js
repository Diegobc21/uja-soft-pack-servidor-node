import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// URI para conectar al cluster
const uri = process.env.DB_URI || 'mongodb://localhost:27017/local'

// Opciones para el cliente de MongoDB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.set('strictQuery', false)

// Se exporta la función que inicia la conexión a la BBDD
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
