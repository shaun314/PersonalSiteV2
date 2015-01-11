

function sendEmailClick() {
    
    var content = "<b>Name:</b> " + $('#contactName').html() + "<br>";
    content += "<b>Email:</b> " + $('#contactEmail').html() + "<br>";
    content += "<b>Message:</b> " + $('#contactMessage').html();

    // make post to Mandrill to send email
    $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
            'key': 'vxE8QtaAhO3q7bZbFkq5DA',
            'message': {
            'from_email': 'shaun314@iastate.edu',
            'to': [
                {
                'email': 'shaun314@iastate.edu',
                'type': 'to'
                }
            ],
            'autotext': 'true',
            'subject': 'New Message from ShaunVanWeelden.com',
            'html': content
            }
        }
        }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });
    
}
    
// button callback
$('#contactSend').click(function(){
    sendEmailClick(); 
});

// enable smooth scrolling
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top-40
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});