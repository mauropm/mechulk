
sound1.addEventListener('click', function(e){
	if (player1.playing || player1.paused)
    {
      player1.stop();  
        if (Ti.Platform.name === 'android')
        { 
            player1.release();
        }   
    }
    else
    {
        player1.start();
     }
		
});

sound2.addEventListener('click', function(e){
	if (player2.playing || player2.paused)
    {
      player2.stop();  
        if (Ti.Platform.name === 'android')
        { 
            player2.release();
        }   
    }
    else
    {
        player2.start();
     }
		
});


sound3.addEventListener('click', function(e){
	if (player3.playing || player3.paused)
    {
      player3.stop();  
        if (Ti.Platform.name === 'android')
        { 
            player3.release();
        }   
    }
    else
    {
        player3.start();
     }
		
});

sound4.addEventListener('click', function(e){
	if (player4.playing || player4.paused)
    {
      player4.stop();  
        if (Ti.Platform.name === 'android')
        { 
            player4.release();
        }   
    }
    else
    {
        player4.start();
     }
		
});

sound5.addEventListener('click', function(e){
	if (player5.playing || player5.paused)
    {
      player5.stop();  
        if (Ti.Platform.name === 'android')
        { 
            player5.release();
        }   
    }
    else
    {
        player5.start();
     }
		
});


sound6.addEventListener('click', function(e){
	if (player6.playing || player6.paused)
    {
      player6.stop();  
        if (Ti.Platform.name === 'android')
        { 
            player6.release();
        }   
    }
    else
    {
        player6.start();
     }
		
});
sound7.addEventListener('click', function(e){
	if (player7.playing || player7.paused)
    {
      player7.stop();  
        if (Ti.Platform.name === 'android')
        { 
            player7.release();
        }   
    }
    else
    {
        player7.start();
     }
		
});