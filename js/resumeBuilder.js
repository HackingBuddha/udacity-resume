var email = "cameron@udacity.com";
var newEmail = email.replace("udacity", "gmail");
var awesomeThoughts = "My name is Algis and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");
var name = "Algirdas Bankauskas";
var role = "Front-End Developer";
var contact = "James Webb";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
