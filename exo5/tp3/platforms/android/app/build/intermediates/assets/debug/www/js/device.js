
function onDeviceReady() {
    var modele = device.model;
    var plat = device.platform;
    var uuid = device.uuid;
    var ver = device.version;
    
    alert('Modele : ' + modele+'\nPlateforme : ' + plat+'\nUUID : ' + uuid+'\nVersion : ' + ver);
}

document.addEventListener("deviceready",onDeviceReady, false);