const LoginViewModel = require("./login-view-model");
const http = require("http");
const frameModule = require("ui/frame");
var appSettings = require('application-settings');


/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    const page = args.object;
    page.addCssFile("css/style.css");

    page.bindingContext = new LoginViewModel();
}

function onLoginWithSocialProviderButtonTap() {
    /* ***********************************************************
    * For log in with social provider you can add your custom logic or
    * use NativeScript plugin for log in with Facebook
    * http://market.nativescript.org/plugins/nativescript-facebook
    *************************************************************/
}

async function onSigninButtonTap(args) {
    const button = args.object;
    const bindingContext = button.bindingContext;
    var sessionId = await sessionIdreturn();
    var email = bindingContext.email;
    var pass = bindingContext.pass;
    var login = await loginValidation(sessionId,email);

    appSettings.setString('email', sessionId);
    
    

    //console.log(bindingContext.email);
    //console.log("Principal" + sessionId);

}

function onForgotPasswordTap() {
    /* ***********************************************************
    * Call your Forgot Password logic here.
    *************************************************************/
}

async function sessionIdreturn () {

    var user = "industria.kg";
    var pass = "qwerty123";
    var result;
    var sessionId;


    
    console.log("SessionIdreturn");
    
    var webMethod = "https://www.impeltechnology.com/rest/api/login?loginName="+ user +"&password="+ pass +"&output=json";
    var sessionId;

    await http.request({
        url: webMethod,
        method: "POST",
        headers: { "Content-Type": "application/json" }
    }).then(function (response) {
    result = response.content.toJSON();
    sessionId = result.sessionId;
    //console.log(sessionId);


    }, function (e) {
        console.log("Error occurred " + e);
    });

    return sessionId;
}

async function loginValidation(sessionId,email){

             var webMethod = "https://www.impeltechnology.com/rest/api/getPage?viewId=CesImG16T_uLAYFzGK-TQQ&sessionId="+ sessionId +"&output=json&&objName=Proveedor&filterName=loginName&filterValue="+email;
             var query;
             var topmost = frameModule.topmost();

             await http.request({ url: webMethod, method: "GET" }).then(function (response) {

                var obj = response.content.toJSON();

                if (obj.length > 0) {

                    appSettings.setString('nombreConductor', obj[0].Nombres);
                    appSettings.setString('apellidoConductor', obj[0].Apellidos);
                    appSettings.setString('identificacionConductor', obj[0].No_Identificacion);
                    appSettings.setNumber('id', obj[0].id);

                    alert("Bienvenido "+ obj[0].Nombres + " " + obj[0].Apellidos);
                    topmost.navigate("home/home-page");     
                }else {
                    alert("Usuario o contraseña Incorrecto");
                }


            }, function (e) {

            });



}

exports.loginValidation = loginValidation;
exports.sessionIdreturn = sessionIdreturn;
exports.onNavigatingTo = onNavigatingTo;
exports.onLoginWithSocialProviderButtonTap = onLoginWithSocialProviderButtonTap;
exports.onSigninButtonTap = onSigninButtonTap;
exports.onForgotPasswordTap = onForgotPasswordTap;
