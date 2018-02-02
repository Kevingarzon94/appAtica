const observableModule = require("data/observable");

function SettingsViewModel() {
    const viewModel = observableModule.fromObject({

    listPickerCountries: ["Planeados", "Registrados", "Cargados", "Descargados"],
    selectedListPickerIndex: 0,

    });

    return viewModel;
}

module.exports = SettingsViewModel;
