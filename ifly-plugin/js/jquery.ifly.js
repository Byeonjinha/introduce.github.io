// jQuery iFly Plugin
//
// Version 1.0
//
// Code by Lufutu
// http://lufutu.com
//
// More info: #
//
// Terms of Use
//
// This plugin is dual-licensed under the GNU General Public License
//   and the MIT License and is copyright Lufutu .
//

(function($){  
    jQuery.fn.ifly = function(options) {    
        var  
          defaults = {  
            speed: 400,
			delayStartTime: 200,	
			eachCharTime: 300,
            active: true, 
			heightOfParent: 100,
			repeat:true
          },  
          settings = $.extend({}, defaults, options);
		 var status = {running:false,done:false};
		function run(element,again){
			status.done=false;
			status.running=true;
			if(!again){
				var string = element.text();			
				var newString = "";
				for(var i = 0; i < string.length; i++){
					if(i == 0){
						newString += "<span class=\"ifly-char first\">" + string[i] + "</span>";
					}
					else if(i == string.length-1){
						newString += "<span class=\"ifly-char last\">" + string[i] + "</span>";
					}
					else{
						newString += "<span class=\"ifly-char middle\">" + string[i] + "</span>";
					}
				}
				element.html(newString);	
			parentHeight = element.height()+ settings.heightOfParent;
			element.css({'height': parentHeight+ 'px', 'position':'relative'});						
			}
			delay = settings.delayStartTime;
			element.find('.ifly-char').each(function (i) {
				delay += settings.eachCharTime;	
				$(this).css({'top' : $(this).height() + parentHeight + 'px', 'opacity' : '0', 'position' : 'relative'}).delay(delay);		
				$(this).animate({
					opacity: 1,
					top: 0
				}, settings.speed, function() {		
						if($(this).hasClass('last')){						
						status.done=true;
						status.running=false;
						if(settings.repeat && status.done){							
							setTimeout(repeat(element),5000);
						}						
					}				
				});	
			});		  
		};
		function repeat(element){
			element.animate({
					opacity: 1,
				}, 10000, 'linear', function() {		
					run(element,true);			
				});	

		};		
        this.each(function() {			
			run($(this),false);
			return this;
          });	
    }  
})(jQuery);  

