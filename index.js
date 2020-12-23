const app = require('express')();

const PORT = 6666

const startListening = () => {
    app.listen(PORT, () => {
        console.log(`Lifting off on ${PORT}`)
    })
}

startListening();
