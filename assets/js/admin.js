$('[data-toggle="popover"]').popover();
firebase.auth().onAuthStateChanged(function(user){
	var isAdmin,ref;
	isAdmin=firebase.database().ref("users");
	on('value',function(d){console.log(d)})
	console.log(isAdmin);
	if(user)
	{
		$(".login-form").fadeOut(300,function(){
			$(".admin-actions").fadeIn(300).removeClass("hide");
		});
		
	}
	else if(!$(".admin-actions").hasClass('hide'))
	{
		$(".admin-actions").fadeOut(300,function(){
			$(".login-form").fadeIn(300);
		}).addClass("hide");

	}
});
$(".logout").click(function(){
	firebase.auth().signOut();
});
$(".addBook").click(function(){

});
$('.form-admin .login').click(function(e){
	e.preventDefault();
	var email=$('.email').val(),
		password=$('.password').val();
	
	if(email.length&&password.length){
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
			
			var message, provider;
			switch(error.code){
				case ".auth/invalid-email":
					$('email-wrapper')
						.attr("title","You entered an invalid email address.")
						.addClass("has-error");
					break;
				case "auth/user-disabled":
					$('.email-wrapper')
						.attr("title","You account is disabled.")
						.addClass("has-error");
					break;
				case "auth/user-not-found":
					$('.email-wrapper')
						.attr("title","You have not registred yet.")
						.addClass("has-error");
					break;
				case "auth/wrong-password":
					$('.password-wrapper')
						.attr("title","Your password was incorrect")
						.addClass("has-error");
					break;
				case "auth/network-request-failed":
					$('.email-wrapper')
						.attr("title","Please check your internet connection.")
						.addClass("has-error");
					break;
				default:
					$('.email-wrapper')
						.attr("title","An unexpected error occurred.")
						.addClass("has-error");
					break;
			}

		});
		}		
	}
);
