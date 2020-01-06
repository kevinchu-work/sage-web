function submitToAPI(e) {
	e.preventDefault();
	var URL = "https://wvzmipq3ca.execute-api.us-west-2.amazonaws.com/Development/webcontactses";

	// Validate Name
	// var Namere = /[A-Za-z]{1}[A-Za-z]/;
	// if (!Namere.test($("#name-input").val())) {
	// 	alert("Name can not less than 2 char");
	// 	return;
	// }

	// Validate Phone
	// var mobilere = /[0-9]{10}/;
	// if (!mobilere.test($("#phone-input").val())) {
	// 	alert("Please enter valid mobile number");
	// 	return;
	// }

	// Validate Email Address
	if ($("#email").val() == "") {
		alert("Please enter your email address");
		return;
	}

	var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
	if (!reeamil.test($("#email").val())) {
		alert("Please enter valid email address");
		return;
	}


	var name = $("#firstname").val() + " " + $("#lastname").val();
	var phone = $("#tel").val(); 
	var email = $("#email").val();
	var desc = $("#message").val();
	var subj = $("#subject").val()
	var data = {
		name: name,
		phone: phone,
		email: email,
		desc: desc,
		subj: subj
	};

	console.log("Data: " + JSON.stringify(data));

	$.ajax({
		type: "POST",
		//url: "https://wvzmipq3ca.execute-api.us-west-2.amazonaws.com/Development/webcontactses",
		url: "https://7zu9ou2hh3.execute-api.us-west-2.amazonaws.com/Production/contactformsesgateway",
		dataType: "json",
		crossDomain: "true",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),

		success: function () {
			// clear form and show a success message
			alert("Enquiry Sent Successfully, we will get back to you as soon as possible!");
			$("#contactForm").trigger("reset");
			//location.reload();
		},

		error: function (jqXHR, textStatus, errorThrown) {
			// show an error message
			alert("UnSuccessfull");
			//console.error( errorThrown );
		}
	});
}