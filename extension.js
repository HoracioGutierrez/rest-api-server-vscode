// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const JSONServer = require('./server');
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "rest-api-server" is now active!');

	const item = vscode.window.createStatusBarItem(2,1);
	item.text = "$(database) REST API : 9000"
	item.tooltip = "Stop REST API server"
	item.command = "rest-api-server.stop"
	
	let disconnect = vscode.commands.registerCommand("rest-api-server.stop",function(){
		
		let server = new JSONServer
		server.close()
		item.dispose()
		item.hide()
		vscode.window.showInformationMessage("REST API Server stopped!");

	})

	let connect = vscode.commands.registerCommand('rest-api-server.start', function () {
		
		const editor = vscode.window.activeTextEditor
		
		if(!editor){
			vscode.window.showErrorMessage("No active file selected!")
			return;
		}
		
		const document = editor.document
		const text = document.getText()
		
		if(!text){
			vscode.window.showErrorMessage("File is empty!")
			return;
		}
		
		let object;
		try{
			object = JSON.parse(text)
		}catch(e){
			vscode.window.showErrorMessage("File must be a valid JSON!")
			return;
		}

		
		const server = new JSONServer
		server.setRouter(object)
		server.setMiddle()
		server.config()

		server.listen(9000,function(){
			vscode.window.showInformationMessage("New REST server listening on port 9000!");
			
			item.show()
		})

	});

	context.subscriptions.push(disconnect)
	context.subscriptions.push(connect);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
