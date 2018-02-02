const observableModule = require("data/observable");

function SearchViewModel() {
    const viewModel = observableModule.fromObject({
        onDateSelected: function (args) {

            ejemplo();
      
          },
    });

    return viewModel;
}

function ejemplo() {

    alert("No tiene Destino Progarmado para Hoy.");
  }
  
  
  exports.ejemplo = ejemplo;
module.exports = SearchViewModel;
