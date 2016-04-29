var app = require('app')
var BrowserWindow = require('browser-window')

app.on('ready', function(){
	var mainWindow = new BrowserWindow({
		width: 300,
		height: 200
	})
	mainWindow.loadURL('file://' + __dirname + '/index.html' )
})