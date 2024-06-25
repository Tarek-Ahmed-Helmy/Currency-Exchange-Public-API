const express = require("express")
const exchangeController = require('../Controllers/exchangeController')
const { validationSchema } = require('../Middlewares/validationSchema')
const router = express.Router()

router.route('/')
    .get(validationSchema(), exchangeController.exchange)

module.exports = router