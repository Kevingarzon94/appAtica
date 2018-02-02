const observableModule = require("data/observable");

function SettingsViewModel() {
    const viewModel = observableModule.fromObject({
        checkList: {
            bandName: true,
            albumName: false,
            year: false,
            owned: false,
            myRating: true
        },
    

    });

    return viewModel;
}

module.exports = SettingsViewModel;
