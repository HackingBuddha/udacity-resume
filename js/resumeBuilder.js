var bio = {
	name: "Algirdas Bankauskas",
	role: "Front-End Developer",
	skills: ["HTML ", "CSS ", "Javascript "],
	email: "algirdas.bankauskas@gmail.com",
	github: "HackingBuddha"
};

var education = {
    school:
    {
      name: "Vilnius Management Academy",
      location: "Vilnius, Lithuania",
      degree: "BA",
      majors: ["Business Management"],
      dates: 2007
    },
	
    onlineCourses: [
    {
      title: "Introduction to Computer Science",
	  school: "Harvard University",
	  courseProvider: "edx"
    },
    {
	  title: "Introduction to Theoretical Computer Science",
	  school: "NA",
	  courseProvider: "Udacity"
    },
    {
	  tile: "Engineering Software as a Service",
	  school: "UC Berkeley",
      courseProvider: "edx"
    }
    ]
};

var work = {
	employment: [
	{
	  employer: "Lithuanian Agricultural and Food Market Regulation Agency",
      title: "Export development manager",
	  location: "Vilnius, Lithuania",
	  years: "2008-2011"
	},
	{
	  employer: "Freelance",
      title: "Front-End Developer",
      location: "NA",
	  years: "present"
	}
	]
};

var projects = {
	udacity: [
	{
	  name: "Portfolio Site",
	  description: "Building a basic personal portfolio website with HTML and CSS"
	},
	{
	  name: "Interactive Resume",
	  description: "Building an Interactive Resume with HTML, CSS and JS"
	},
	{
	  name: "Classic Arcade Game Clone",
	  description: "Building an Arcade Game Clone with JS and HTML Canvas"
	},
	{
	  name: "Website Optimization",
      description: "Optimization of a provided website to run at 60 FPS"
	},
	{
	  name: "Neighborhood Map",
	  description: "Building a Single-Page AJAX App using Google Maps API"
	},
	{
	  name: "Feed Reader Testing",
	  description: "Completing the test suite of an RSS Reader App"
	}
	]
};

if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSKill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMlskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);	
}