$(function(){
    var body = $('body'),
        container = $('#container');
    
    /*First part*/
    $('#part1 .next').click(function(){
        body.attr('class', 'next');
        
        step(2);
    });
    
    /*Second Part*/
    $('#part2 .yes').click(function(){
        body.attr('class', 'yes');
        step(3);
    });
    $('#part2 .no').click(function(){
        body.attr('class', 'no');
        step(3);
    });
    
    /*Third Part*/
    $('#part3 .next').click(function(){
       body.attr('class', 'next');
       step(4);
    });
    $('#part3 .sumbit').click(function(){
        body.attr('class', 'submit');
        
    });
    
    /*Fourth Part*/
    $('#part4 .submit').click(function(){
        body.attr('class','submit');
    });
    
    function step(i){

		// Move the #stage div. Changing the top property will trigger
		// a css transition on the element. i-1 because we want the
		// steps to start from 1:

		container.css('top',(-(i-1)*100)+'%');
	}
})