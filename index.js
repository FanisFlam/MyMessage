const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res, next) => {
    res.status(404).send(`404 - not found`);
});

app.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`);
});