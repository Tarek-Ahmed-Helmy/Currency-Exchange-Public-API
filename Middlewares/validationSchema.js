const { query } = require('express-validator')

const validationSchema = () => {
    return [
        query("from")
            .notEmpty().withMessage("from currency is required"),
        query("to")
            .notEmpty().withMessage("to currency is required")
    ]
}

module.exports = {
    validationSchema
}