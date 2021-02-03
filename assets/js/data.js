var personalInfo = {
    websiteTitle: "Archi4Life",
    name: "Lim Zhi Wei",
    location:"Address"
}

var aboutInfo = {
    titleDesc: "A little about me",
    jobTitle: "Architect",
    jobTitleDesc: "I am a proactive architect",
    birthday: "19 March 1997",
    linkedIn: "www.linkedin.com/in/elise",
    phone: "+6018-3155513",
    city: "Melaka",
    degree: "Bachelor Degree of Architecture",
    email: "elise@gmail.com",
    aboutDesc: "lorem ipsum"
}

var skillsData = {
    skillsDesc: "Here are something...",
    skills: [
        {
            name: "Lumion",
            percentage: 100
        },
        {
            name: "AutoCAD",
            percentage: 90
        },
        {
            name: "SketchUp",
            percentage: 80
        },
        {
            name: "Adobe Photoshop",
            percentage: 90
        }
    ]
}

var resumeData = {
    resumeDesc:"",
    summary:{
        summaryDesc:"Fun and innovative person",
        summaryList:[
            "address",
            aboutInfo.phone,
            aboutInfo.email
        ]
    },
    education:[
        {
            name:"Bachelor Degree of Architecture",
            year:"2017-2020",
            institution:"Universiti Tunku Abdul Rahman",
            desc:"Do a lot of things there"
        }
    ],
    professionalExperience:[
        {
            name:"Architect Intern",
            year:"2018 - 2019",
            company:"D Sdn. Bhd.",
            descList:[
                "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
                "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
                "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
                "Oversee the efficient use of production project budgets ranging from $2,000 - $25,000"
            ]
        }
    ]
}

//Personal Data
$(".name").text(personalInfo.name);
$("#websiteTitle").text(personalInfo.websiteTitle);

// About Data
$('#titleDesc').text(aboutInfo.titleDesc);
$('#jobTitle').text(aboutInfo.jobTitle);
$('#jobTitleDesc').text(aboutInfo.jobTitleDesc);
$('#birthday').text(aboutInfo.birthday);
$('#linkedIn').text(aboutInfo.linkedIn);
$('#phoneNum').text(aboutInfo.phone);
$('#city').text(aboutInfo.city);
$('#degree').text(aboutInfo.degree);
$('#aboutEmail').text(aboutInfo.email);
$('#aboutDesc').text(aboutInfo.aboutDesc);

//Skills Data
$('#skillDesc').text(skillsData.skillsDesc);
var skillSize = skillsData.skills.length;
skillsData.skills.forEach(function ({name,percentage},index) {
    var data = `<div class="progress">
                        <span class="skill">${name} <i class="val">${percentage}%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="${percentage}" aria-valuemin="0"
                                 aria-valuemax="100"></div>
                        </div>
                    </div>`;

    if(skillSize/2 > index){
        $('#skill-progress-1').append(data);
    }else{
        $('#skill-progress-2').append(data);
    }
})

//Resume Date
$('#resumeDesc').text(resumeData.resumeDesc);
resumeData.summary.summaryList.forEach(function(item){
   var elem = `<li>${item}</li>`;
   $("#ul-summary-list").append(elem);
});
resumeData.education.forEach(function({name,year, institution,desc}){
    var elem = `<div class="resume-item">
                        <h4>${name}</h4>
                        <h5>${year}</h5>
                        <p><em>${institution}</em></p>
                        <p>${desc}</p>
                    </div>`;
    $('#resume-education-content').append(elem);
});
resumeData.professionalExperience.forEach(function({name,year, company,descList}){
    var desc = descList.map(function (item){
        return `<li>${item}</li>`;
    });

    var elem = `<div class="resume-item">
                        <h4>${name}</h4>
                        <h5>${year}</h5>
                        <p><em>${company}</em></p>
                        ${desc}
                    </div>`;
    $('#resume-professional-content').append(elem);
});