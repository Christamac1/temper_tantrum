	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "If we didn’t eat animals, they would quickly overpopulate the planet and most likely starve to death.",
			name:"God"
	    },
	    {
	    	quote:"If we didn’t milk cows, their udders would explode and they would die.",
			name:"God"
	    },
	    {
	    	quote:"Humans are meant to eat meat.",
			name:"God"
	    },
	    {
	    	quote:"Humans are more intelligent than other animals and so we have the right to do what we want with them.",
			name:"God"
	    },
	    {
	    	quote:"If it’s wrong to kill animals, should tigers and other predators stop eating other animals too?",
			name:"God"
	    },
	    {
	    	quote:"Living a Vegan Lifestyle is Too Expensive.",
			name:"God"
	    },
	    {
	    	quote:"Animals don’t have feelings.",
			name:"God"
	    },
	    {
	    	quote:"If everyone became vegan, all those farmers would be out of business.",
			name:"God"
	    },
	    {
	    	quote:"A vegan diet isn’t healthy.",
			name:"God"
	    },
	    {
	    	quote:"If we didn’t test on animals a lot of people would die from unsafe drugs.",
			name:"God"
	    },
	    {
	    	quote:"Plants have feelings too.",
			name:"God"
	    },
	    {
	    	quote:"Hitler was vegan.",
			name:"God"
	    },
	    {
	    	quote:"Eating meat is part of our heritage.",
			name:"God"
	    },
	    {
	    	quote:"Eating animals is part of the life cycle.",
			name:"God"
	    },
	    {
	    	quote:"Humans are more important than animals.",
			name:"God"
	    },
	    {
	    	quote:"We are omnivores.",
			name:"God"
	    },
	    {
	    	quote:"We have been eating animals since the dawn of humankind.",
			name:"God"
	    },
	    {
	    	quote:"Just because I eat meat doesn't mean I support animal abuse or cruelty.",
			name:"God"
	    },
	    {
	    	quote:"Animals don't know what's happening to them when they are raised and slaughtered.",
			name:"God"
	    },
	    {
	    	quote:"Meat just tastes good.",
			name:"God"
	    },
	    {
	    	quote:"I'm anemic and nothing fixes my iron levels like a propane grilled steak, I'll tell you what!",
			name:"God"
	    },
	    {
	    	quote:" And I heard a voice saying unto me, Arise, Peter; slay and eat.",
	    	name:"Actually God"
	    },
	   

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready