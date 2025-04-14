require('dotenv').config();

const express = require('express');
const cors = require('cors');
require('./config/connection.js');
const router = require('./router/routes.js');

const pmServer = express();
pmServer.use(cors());
pmServer.use(express.json());

// ✅ Mount your routes properly
pmServer.use('/products', router);  // <-- ADD THIS LINE

const PORT = 3000 || process.env.PORT;

pmServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

pmServer.get('/', (req, res) => {
    res.status(200).send('<h1> Server Started </h1>');
});
