import express from 'express'
import softwareController from './../controllers/softwareController.js'

const router = express.Router()

// Todos los métodos para obtener software por query params
router.get('/', softwareController.getAll)

// Obtener todas las categorías
router.get('/categories', softwareController.categories)

// Método para obtener software por nombre
router.get('/:name', softwareController.getOne)


export default router