

var sound1 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'20dp',
	left:'30dp',
	width:'60dp',
	height:'60dp',
});

var sound2 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'20dp',
	left:'130dp',
	width:'60dp',
	height:'60dp',
});

var sound3 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'20dp',
	right:'30dp',
	width:'60dp',
	height:'60dp',
});


var sound4 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'100dp',
	left:'30dp',
	width:'60dp',
	height:'60dp',
});

var sound5 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'260dp',
	left:'30dp',
	width:'60dp',
	height:'60dp',
});

var sound6 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'100dp',
	right:'30dp',
	width:'60dp',
	height:'60dp',
});

var sound7 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'180dp',
	left:'30dp',
	width:'60dp',
	height:'60dp',
});

var sound8 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'260dp',
	right:'30dp',
	width:'60dp',
	height:'60dp',
});

var sound9 = Titanium.UI.createImageView({
	image:'/cc/images/buttonbase.png',
	top:'180dp',
	right:'30dp',
	width:'60dp',
	height:'60dp',
});

sound1.addEventListener('click',function(){
	if(player1.isPlaying()){
		player1.pause();
	} else { 
		player1.play();
	}
});


sound2.addEventListener('click',function(){
	if(player2.isPlaying()){
		player2.pause();
	} else { 
		player2.play();
	}
});

sound3.addEventListener('click',function(){
	if(player3.isPlaying()){
		player3.pause();
	} else { 
		player3.play();
	}
});

sound4.addEventListener('click',function(){
	if(player4.isPlaying()){
		player4.pause();
	} else { 
		player4.play();
	}
});

sound5.addEventListener('click',function(){
	if(player5.isPlaying()){
		player5.pause();
	} else { 
		player5.play();
	}
});

sound6.addEventListener('click',function(){
	if(player6.isPlaying()){
		player6.pause();
	} else { 
		player6.play();
	}
});

sound7.addEventListener('click',function(){
	if(player7.isPlaying()){
		player7.pause();
	} else { 
		player7.play();
	}
});

sound8.addEventListener('click',function(){
	if(player8.isPlaying()){
		player8.pause();
	} else { 
		player8.play();
	}
});


sound9.addEventListener('click',function(){
	if(player9.isPlaying()){
		player9.pause();
	} else { 
		player9.play();
	}
});






