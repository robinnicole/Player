$(document).ready(function() {

	$('#data li').mouseover(function() {
 	 $(this).addClass('listHover');
	});
	$('#data li').mouseout(function() {
  	$(this).removeClass('listHover');
	});
		
	$('.selector').mouseover(function() {
 	 $(this).addClass('docHover');
	});
	$('.selector').mouseout(function() {
  	$(this).removeClass('docHover');
	});
		
		$('#cover1').click(function() {
     	$('#reader_cover1').toggle('slow'); 
        $('#story').show();
        $('#Floyd').hide();
        $('#kellyquinn').hide();
        $('#report2011').hide();

    });
    
    	$('#cover2').click(function () {
    	$('#kellyquinn').hide();
    	$('#story').hide();
    	$('#Floyd').show();
    	 $('#report2011').hide();
	});

				
    
    	$('#cover3').click(function () {
    	$('#kellyquinn').show();
    	$('#story').hide();
    	$('#Floyd').hide();
    	$('#report2011').hide();
	});

		$('#cover4').click(function () {
    	$('#kellyquinn').hide();
    	$('#story').hide();
    	$('#Floyd').hide();
    	$('#report2011').show();
	});
	
		$('#black').mouseover(function() {
		$('#black_male').hide('slow');
		$('#black_male_facts').show();
		
		});
		
		
		$('#black').mouseout(function() {
  		$('#black_male').show();
  		$('#black_male_facts').hide();
		});

		$('#latino').mouseover(function() {
		$('#latino_male').hide('slow');
		$('#latino_male_facts').show();
		
		});
		
		
		$('#latino').mouseout(function() {
  		$('#latino_male').show();
  		$('#latino_male_facts').hide();
		});
		
		
		$('#white').mouseover(function() {
		$('#white_male').hide('slow');
		$('#white_male_facts').show();
		
		});
		
		
		$('#white').mouseout(function() {
  		$('#white_male').show();
  		$('#white_male_facts').hide();
		});
		
		$('#submit').click(function() {
     	$('#framey_recorder_cover').toggle('slow');   
     	
     		if ($('#framey_recorder_cover').is(':visible')) {
     				$('#submission_gallery1').hide(); 
     				$('#submission_gallery2').hide();
     				}
 	 	
 			});
 
 			$('#close').click(function() {  
     	
     		if ($('#framey_recorder_cover').is(':hidden')) {
     				$('#submission_gallery1').show(); 
     				$('#submission_gallery2').show();
     				$('#framey_recorder_cover').fadeIn();
     				}
 	 	
 			});

});




            //var disqus_shortname = 'friskedcomobo'; // required: replace example with your forum shortname

            /* * * DON'T EDIT BELOW THIS LINE * * */
           // (function() {
               // var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
                //dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
               // (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            //})();
   

/*         <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> */
/*         <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a> */
        

