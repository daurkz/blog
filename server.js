const express = require('express');
const path = require('path')


const app = express();
const PORT = 9030;
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.status(200).render('home')
})

app.get('/signup', (req, res) => {
    res.status(200).render('signup')
})

app.get('/signin', (req, res) => {
    res.status(200).render('signin')
})


app.listen(PORT, () => {
    console.log(`
        Server started. http://localhost:${PORT}
    `)
})