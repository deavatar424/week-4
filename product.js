
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 19.99 },
];


app.get('/', (req, res) => {
    res.render('index', { title: 'Product List', products });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
