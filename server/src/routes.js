const AuthenticationController = require('./controllers/AuthenticationController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
  //routes
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
    );  
}
