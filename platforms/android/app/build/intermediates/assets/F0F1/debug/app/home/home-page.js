const frameModule = require("ui/frame");

const HomeViewModel = require("./home-view-model");

var builder = require("ui/builder");
var mapsModule = require("nativescript-google-maps-sdk");

var application = require("application");


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

    page.bindingContext = new HomeViewModel();
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

function onMapReady(args) {
  var mapView = args.object;

  console.log("Setting a marker...");
  var marker = new mapsModule.Marker();
  marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
  marker.title = "Sydney";
  marker.snippet = "Australia";
  marker.userData = { index : 1};
  mapView.addMarker(marker);
  
  // Disabling zoom gestures
  mapView.settings.zoomGesturesEnabled = false;
}
function onMarkerSelect(args) {
   console.log("Clicked on " +args.marker.title);
}

function onCameraChanged(args) {
    console.log("Camera changed: " + JSON.stringify(args.camera)); 
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.onMapReady = onMapReady;
exports.onMarkerSelect = onMarkerSelect;
exports.onCameraChanged = onCameraChanged;
