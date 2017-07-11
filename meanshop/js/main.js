$("#submit").click(function(){
		var email = 'test@yourdomain.com';
    var subject = 'Sample Subject';
    var emailBody = $("#emailMessage").val();
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
    location.reload();
    });


	
 $(document).ready(function(){
	 $('body').keydown(function(e){
    if (e.which==27){
		    $("#homefullspan").collapse('hide');
    $("#bodyText").show('fade');
	    $("#mostpop").show('fade');
    }

});
	 
	 $(".nav-link").hover(function(e){
		 //Check the div id
		 
		 
		 if(this.id=="1"){e.preventDefault();}
			  else if(this.id=="2"){e.preventDefault();}
			  else if(this.id=="3"){e.preventDefault();}
			  else if(this.id=="4"){e.preventDefault();}
			  else if(this.id=="5"){e.preventDefault();}
		else		 
		{$("#bodyText").hide();$("#mostpop").hide('fade'); $("#homefullspan").collapse('show'); $(this).tab('show');}
});
	 
$(".navbar-inverse").hover(function(){
		    $("#homefullspan").collapse('hide');
    $("#bodyText").show('fade');
	    $("#mostpop").show('fade');
});

	 $("#headerArea").hover(function(){
		    $("#homefullspan").collapse('hide');
    $("#bodyText").show('fade');
	    $("#mostpop").show('fade');
});
	 $("#emailMessage").click(function(){
		 $("#footerArea").height(200);
		 $(this).attr('rows',10);
	 });
});
