


// 2/3 - userinfo goes in this database
var profileDB = [];
//7- to update profiles, assigning numbers to profiles
var counter = 0;

// 1 - creating constructor to make profile to get INFO, to grab info, and assign to props

var Profile = function () {
	this.an_id = counter++;
	this.aname = document.getElementById("name").value;
	this.age = document.getElementById("age").value;
	this.alocation = document.getElementById("location").value;
	this.pic = document.getElementById("pic").value;
}

//2 - function to log this to what is  logged or documented.
var create = function () {
	var newProfile = new Profile();
	profileDB.push(newProfile);
	//console.log(newProfile);
	//6 - before we read we need to clear out the first one
	//document.getElementById("profiles").innerHTML = "";
	//5 - call function, and info on bottom will be hoisted up to work
	read();
}

//4 - Reading the information. showing the info
var read = function () {
	document.getElementById("profiles").innerHTML = "";

	for(var i = 0; i < profileDB.length; i+=1) {
		document.getElementById("profiles").innerHTML += 
		"<li>"+ 
		"<ul>" + 
		"<li>" + profileDB[i].aname + "</li>" +
		"<li>" + profileDB[i].age + "</li>" +
		"<li>" + profileDB[i].alocation + "</li>" +
		"<li>" + profileDB[i].pic + "</li>" +
		// 8 - adding button for save
		"<li>" + "<button class='btn btn-info' onclick='startUpdate(" + profileDB[i].an_id + ")'>" + "Edit" + "</button>" + "</li>" +
		"</li>" +
		"<li>" + "<button class='btn btn-info' onclick='deleteProfile(" + profileDB[i].an_id + ")'>" + "Delete" + "</button>" + "</li>" +
		"</ul>" + 
		"</li>"
	}
}

//7 - for updating

var startUpdate = function(id) {
	for(var i = 0; i < profileDB.length; i += 1 ){
		if(profileDB[i].an_id === id) {
			document.getElementById("updateForm").innerHTML =
			"<input id='editName' value='" + profileDB[i].aname + "'/>" + 
			"<input id='editAge' value='" + profileDB[i].age + "'/>" + 
			"<input id='editLocation' value='" + profileDB[i].alocation + "'/>" + 
			"<input id='editPic' value='" + profileDB[i].pic + "'/>" +
			"<button onclick='finishUpdate(" + profileDB[i].an_id + ")'>" +
			"Submit Update" +
			"</button>"
		};
	}
}


var finishUpdate = function(id) {
	for(var i = 0; i < profileDB.length; i++) {
		if(profileDB[i].an_id === id) {
			profileDB[i].aname = document.getElementById("editName").value;
			profileDB[i].age = document.getElementById("editAge").value;
			profileDB[i].alocation = document.getElementById("editLocation").value;
			profileDB[i].pic = document.getElementById("editPic").value;
			document.getElementById("updateForm").innerHTML = "";
			read();
		};
	}
}

var deleteProfile = function(id) {
	for(var i = 0; i <profileDB.length; i++) {
		if(profileDB[i].an_id === id) {
			profileDB.splice(i, 1);
			read();
		}
	}
}