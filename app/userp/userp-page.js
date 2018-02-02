const frameModule = require("ui/frame");
var view = require("ui/core/view");
const http = require("http");
const userpViewModel = require("./userp-view-model");
var appSettings = require('application-settings');


/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    /* ***********************************************************
    * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
    * Skipping the re-initialization on back navigation means the user will see the
    * page in the same data state that he left it in before navigating.
    *************************************************************/
    if (args.isBackNavigation) {
        return;
    }

    const page = args.object;
    page.addCssFile("css/style.css");
    
    page.bindingContext = new userpViewModel();

}

/* ***********************************************************
 * According to guidelines, if you have a drawer on your page, you should always
 * have a button that opens it. Get a reference to the RadSideDrawer view and
 * use the showDrawer() function to open the app drawer section.
 *************************************************************/
function onDrawerButtonTap(args) {
    const sideDrawer = frameModule.topmost().getViewById("sideDrawer");
    sideDrawer.showDrawer();
}

function editarPerfil (args) {
    const button = args.object;
    const bindingContext = button.bindingContext;

    var nombre = bindingContext.nombrec;
    var apellido = bindingContext.apellidoc;
    var identificacion = bindingContext.identificacionc;
    var idTable = bindingContext.id;
    var sessionId = bindingContext.sessionId;

    appSettings.setString('nombreConductor', nombre);
    appSettings.setString('apellidoConductor', apellido);
    appSettings.setString('identificacionConductor', identificacion);

    var webMethod = "https://www.impeltechnology.com/rest/api/updateRecord?&objName=Proveedor&id="+ idTable +"&useIds=false&Nombres=" + nombre + "&Apellidos=" + apellido + "&No_Identificacion=" + identificacion + "&sessionId="+sessionId;

        http.request({ url: webMethod, method: "GET" }).then(function (response) {

            alert("Datos Actualizados Correctamente");

        }, function (e) {

        });
 
}
exports.editarPerfil = editarPerfil;
exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
