const observableModule = require("data/observable");
var appSettings = require('application-settings');


function userpViewModel() {
    const viewModel = observableModule.fromObject({
    
        nombrec: appSettings.getString('nombreConductor', 'defaultValue'),
        apellidoc: appSettings.getString('apellidoConductor', 'defaultValue'),
        identificacionc: appSettings.getString('identificacionConductor', 'defaultValue'),
        sessionId: appSettings.getString('email', 'defaultValue'),
        id: appSettings.getNumber('id', 54.01),

    });

    return viewModel;
}

module.exports = userpViewModel;
