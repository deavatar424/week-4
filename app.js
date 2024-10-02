
const express = require('express');

const app = express();

const PORT = 6000;


app.get('/', (req, res) => {
    res.send('Welcome to sycamore Home Page!');
});


app.get('/about', (req, res) => {
    res.send('more about sycamore!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${6000}`);
});
