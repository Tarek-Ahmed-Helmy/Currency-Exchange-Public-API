const express = require('express')
const exchangeRoute = require('./Routes/exchangeRoute')
require("dotenv").config();
const rateLimit = require("express-rate-limit");


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 50, // limit each IP to 50 requests per windowMs
    message: { error: 'Too many requests, please try again later.' }
});


const app = express()
const PORT = process.env.PORT || 3000


app.use(limiter);
app.use('/exchange-rate', exchangeRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
