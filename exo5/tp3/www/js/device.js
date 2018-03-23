
function onDeviceReady() {
    var modele = device.model;
    var plat = device.platform;
    var uuid = device.uuid;
    var ver = device.version;
    alert('Modele : ' + modele+'\nPlateforme : ' + plat+'\nUUID : ' + uuid+'\nVersion : ' + ver);
    
    navigator.globalization.getPreferredLanguage(
    function (language) {alert('language: ' + language.value + '\n');},
    function () {alert('Error getting language\n');}
);
}

document.addEventListener("deviceready",onDeviceReady, false);
