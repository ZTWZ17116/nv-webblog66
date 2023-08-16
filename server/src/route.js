const UserController = require('./controllers/UserController')

module.exports = (app) =>{
    app.get('/users', UserController.index),

    app.post('/users', UserController.create),

    app.put('/user/:userID', UserController.put),

    app.delete('/user/:userID', UserController.delete),

    app.get('/user/:userID', UserController.show)
}