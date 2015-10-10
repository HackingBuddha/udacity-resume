var bio = {};
var name = "Algirdas Bankauskas";
var role = "Front-End Developer";
var skills = ["HTML ", "CSS ", "Javascript "];
var email = "algirdas.bankauskas@gmail.com";
var github = "HackingBuddha";

bio["formattedName"] = HTMLheaderName.replace("%data%", name);
bio.formattedRole = HTMLheaderRole.replace("%data%", role);
bio.formattedEmail = HTMLemail.replace("%data%", email);
bio.formattedGithub = HTMLgithub.replace("%data%", github);
bio.formattedSkills = HTMLskills.replace("%data%", skills);

$("#header").prepend(bio.formattedRole);
$("#header").prepend(bio.formattedName);
$("#main").append(bio.formattedEmail);
$("#main").append(bio["formattedGithub"]);
$("#main").append(bio.formattedSkills);
