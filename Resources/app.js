Titanium.include('/ui/buttons.js');
Titanium.include('/ui/sounds.js');

var win = Ti.UI.createWindow({
	backgroundColor:'black',
	backgroundImage:'/cc/images/music_hall.jpg',
	top:0,
	left:0,
	orientationModes:[Titanium.UI.PORTRAIT],
	navBarHidden:true,
});

win.add(sound1);
win.add(sound2);
win.add(sound3);
win.add(sound4);
win.add(sound5);
win.add(sound6);
win.add(sound7);
win.add(sound8);
win.add(sound9);


win.open();
