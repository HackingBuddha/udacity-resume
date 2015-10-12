var bio = {
	name: "Algirdas Bankauskas",
	role: "Front-End Developer",
	skills: ["HTML ", "CSS ", "Javascript "],
	email: "algis999@gmail.com",
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
      title: "Export Development Manager",
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

 function displayWork() {
	
	for (job in bio.skills) {

		if (bio.skills.length > 0) {

			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[job]);
			$("#skills").append(formattedSkill);	
		}
	};

	for (job in work.employment) {
		
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employment[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.employment[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
	}
};

displayWork();

projects.display = function() {

	for (project in projects.udacity) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectName = HTMLprojectTitle.replace("%data%", projects.udacity[project].name);
		var formattedProjectDescription = HTMLprojectTitle.replace("%data%", projects.udacity[project].description);

        $(".project-entry:last").append(formattedProjectName);
        $(".project-entry:last").append(formattedProjectDescription);     
    } 
};

projects.display();