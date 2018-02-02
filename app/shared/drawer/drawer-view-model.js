const observableModule = require("data/observable");
var appSettings = require('application-settings');

/* ***********************************************************
 * Keep data that is displayed in your app drawer in the drawer custom component view model.
 *************************************************************/
function DrawerViewModel(selectedPage) {
    const viewModel = observableModule.fromObject({
        /* ***********************************************************
         * Use the drawer view model to initialize the properties data values.
         *************************************************************/
        nombreConductor: appSettings.getString('nombreConductor', 'defaultValue'),
        selectedPage: selectedPage
    });

    return viewModel;
}

module.exports = DrawerViewModel;
