const express = require('express')
const router = express.Router()
const clientController = require('../controllers/client')

router.get('/getclients', clientController.getClients)
router.post('/add', clientController.addClient)

module.exports = router
