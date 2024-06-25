require("dotenv").config();
const axios = require("axios");
const NodeCache = require("node-cache");
const { validationResult } = require("express-validator");
const API_URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair`;

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

module.exports = {
    exchange: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { from, to } = req.query;

        const cacheKey = `${from}_${to}`;
        // Check if the response is in cache
        const cachedRate = cache.get(cacheKey);
        if (cachedRate) {
            return res.json({ from, to, rate: cachedRate });
        }

        try {
            const response = await axios.get(`${API_URL}/${from}/${to}`);
            if (response.data.conversion_rate) {
                const rate = response.data.conversion_rate;
                // Save the response in cache
                cache.set(cacheKey, rate);
                res.json({ from: from, to: to, rate });
            } else {
                res.status(500).json({ error: 'Invalid response from exchange rate API' });
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code that falls out of the range of 2xx
                res.status(error.response.status).json({ error: error.response.data });
            } else if (error.request) {
                // The request was made but no response was received
                res.status(500).json({ error: 'No response received from API' });
            } else {
                // Something happened in setting up the request that triggered an Error
                res.status(500).json({ error: 'Error in API request setup' });
            }
        }
    }
}
