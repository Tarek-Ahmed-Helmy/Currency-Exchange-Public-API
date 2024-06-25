const express = require("express")
const exchangeController = require('../Controllers/exchangeController')
const { validationSchema } = require('../Middlewares/validationSchema')
const router = express.Router()

/**
 * @swagger
 * /exchange-rate:
 *   get:
 *     summary: Get exchange rate
 *     parameters:
 *       - in: query
 *         name: from
 *         schema:
 *           type: string
 *         required: true
 *         description: The source currency code
 *       - in: query
 *         name: to
 *         schema:
 *           type: string
 *         required: true
 *         description: The target currency code
 *     responses:
 *       200:
 *         description: A successful response with the exchange rate
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 from:
 *                   type: string
 *                   example: "eur"
 *                 to:
 *                   type: string
 *                   example: "usd"
 *                 rate:
 *                   type: number
 *                   example: 1.0729
 *       400:
 *         description: Invalid input or validation errors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: "Invalid value"
 */

router.route('/')
    .get(validationSchema(), exchangeController.exchange)

module.exports = router