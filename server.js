const express = require('express');
const path = require('path')


const app = express();
const PORT = 3030;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(200).render('home')
})

app.listen(PORT, () => {
    console.log(`
        Server started. http://localhost:${PORT}
    `)
})