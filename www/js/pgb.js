function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function displayContacts() {

var options = new ContactFindOptions();
options.multiple=true; 
var fields = ["displayName", "phoneNumbers"];
navigator.contacts.find(fields, onSuccess, onError, options);


function onSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        console.log("Display Name = " + contacts[i].displayName);
        if(null != contacts[i].phoneNumbers)
            {
                for(var j=0;j<contacts[i].phoneNumbers.length;j++)
                {
                      console.log("Name = " + contacts[i].displayName);
                      console.log("Phone = " + contacts[i].phoneNumber[j].value);

                }
            }
    }
}
}

function detectMovement() {
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}

var options = { frequency: 3000 };  // Update every 3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function showData() {
	dane = 
			'Barbara Czaicka'  + '\n' + 
			'186128'  + '\n';

	navigator.notification.alert(dane);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    navigator.notification.alert('Connection type: ' + states[networkState]);
}