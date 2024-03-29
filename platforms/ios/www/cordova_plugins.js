cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.romainstrock.cordova.background-geolocation/www/BackgroundGeoLocation.js",
        "id": "com.romainstrock.cordova.background-geolocation.BackgroundGeoLocation",
        "clobbers": [
            "backgroundGeoLocation"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.romainstrock.cordova.background-geolocation": "0.3.9",
    "org.apache.cordova.geolocation": "0.3.10"
}
// BOTTOM OF METADATA
});