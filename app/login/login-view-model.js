const observableModule = require("data/observable");
var appSettings = require('application-settings');
const http = require("http");


function LoginViewModel() {
    const viewModel = observableModule.fromObject({
        email: "",
        password: "",

        signIn: async function (sessionId) {
            const email = this.email;
            const password = this.password;

             appSettings.setString('email', sessionId);
             //var token = appSettings.getString('email', 'defaultValue');

        }
    });

    return viewModel;
}

module.exports = LoginViewModel;
