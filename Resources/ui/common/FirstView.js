//FirstView Component Constructor
function FirstView() {
	var style = require('/ui/handheld/styles')
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		text:'Sound M',
		height:'auto',
		width:'auto',
		top:'10%',
	});
	self.add(label);
	
	
	
	
	
	
	
	return self;
}

module.exports = FirstView;
