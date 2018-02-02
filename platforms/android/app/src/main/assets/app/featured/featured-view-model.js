const observableModule = require("data/observable");

const http = require("http");

function FeaturedViewModel() {

 

    const viewModel = observableModule.fromObject({
    
    countries: [
      { name: "Servicio #01", imageSrc: "info" },
      { name: "Servicio #02", imageSrc: "info" },
      { name: "Servicio #03", imageSrc: "info" },
      { name: "Servicio #04", imageSrc: "info" },
      { name: "Servicio #05", imageSrc: "info" },
      { name: "Servicio #06", imageSrc: "info" },
      { name: "Servicio #07", imageSrc: "info" },
      { name: "Servicio #08", imageSrc: "info" },
      { name: "Servicio #09", imageSrc: "info" },
      { name: "Servicio #10", imageSrc: "info" },
      { name: "Servicio #11", imageSrc: "info" },
      { name: "Servicio #12", imageSrc: "info" },
      { name: "Servicio #13", imageSrc: "info" },
      { name: "Servicio #14", imageSrc: "info" },
      { name: "Servicio #15", imageSrc: "info" },
      { name: "Servicio #16", imageSrc: "info" },
      { name: "Servicio #17", imageSrc: "info" },
    ],

    });

    return viewModel;
}


module.exports = FeaturedViewModel;
