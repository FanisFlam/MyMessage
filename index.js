const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req ,res) => {
    res.render('index');
});

app.use((req, res, next) => {
    res.status(404)
        .send('404 - Not found');
});

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});