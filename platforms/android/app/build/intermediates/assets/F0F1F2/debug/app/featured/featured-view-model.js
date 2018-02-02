const observableModule = require("data/observable");

const http = require("http");

function FeaturedViewModel() {

    var user = "industria.kg";
    var pass = "qwerty123";
    var result;

    var webMethod = "https://www.impeltechnology.com/rest/api/login?loginName="+ user +"&password="+ pass +"&output=json";
    var sessionId;

	http.request({
	    url: webMethod,
	    method: "POST",
	    headers: { "Content-Type": "application/json" }
	}).then(function (response) {
	result = response.content.toJSON();
    console.log(result.sessionId);


	}, function (e) {
	    console.log("Error occurred " + e);
	});


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

function createSessionId(){
    var user = "industria.kg";
    var pass = "qwerty123";
    var webMethod = "https://www.impeltechnology.com/rest/api/login?loginName="+ user +"&password="+ pass +"&output=json";
    var sessionId;

	http.request({
	    url: webMethod,
	    method: "POST",
	    headers: { "Content-Type": "application/json" },
	    content: JSON.stringify({ MyVariableOne: "ValueOne", MyVariableTwo: "ValueTwo" })
	}).then(function (response) {
	    sessionId = response.sessionId;
	    console.log(sessionId);
	}, function (e) {
	    console.log("Error occurred " + e);
	});

	return sessionId;


}

module.exports = FeaturedViewModel;
