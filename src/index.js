const app = require('./app')
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: 'Refer Readme.md for info on different APIs',
        developer: 'Huzaifa S Pitolwala'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
