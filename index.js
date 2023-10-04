const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors())

app.get('/translation', (req,res) => {
    const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'google-translator9.p.rapidapi.com',
        },
        data: {
        q: req.query.q,
        source: req.query.source,
        target: req.query.target,
        format: 'text',
        },
    };

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
           console.error(error);
    })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




