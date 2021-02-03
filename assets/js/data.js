var personalInfo = {
    websiteTitle: "Elise Studio",
    name: "Lim Zhi Wei ",
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
    email: "elizabeth-0319@hotmail.com",
    aboutDesc: "•Passionate in computer literacy from pre-thinking on development to post production, Proactive person, eager to learn, explore conceptual drawing and creative thinking, consistently working on personal studio project to upgrade architecture design skills and technical skills. "
}

var skillsData = {
    skillsDesc: "Here are something...",
    skills: [
        {
            name: "AutoCAD",
            percentage: 90
        },
        {
            name: "SketchUp",
            percentage: 90
        },
        {
            name: "Lumion",
            percentage: 80
        },
        {
            name: "Revit (BIM)",
            percentage: 80
        },
        {
            name: "V-ray",
            percentage: 70
        },
        {
            name: "Adobe Photoshop, Illustrator, Substance, InDesign, Premiere Pro",
            percentage: 70
        },
        {
            name: "Microsoft Office Word, Excel, PowerPoint, Project ",
            percentage: 90
        }
    ]
}

var resumeData = {
    resumeDesc:"",
    summary:{
        summaryDesc:"Fun and innovative person",
        summaryList:[
            "Melaka",
            aboutInfo.phone,
            aboutInfo.email
        ]
    },
    education:[
        {
            name:"Bachelor Degree of Architecture",
            year:"2018-2020",
            institution:"Universiti Tunku Abdul Rahman (UTAR)",
            desc:"Course Completed: Architecture Design 1,2,3,4,5,6 Construction Technology 1,2,3, Architectural Studio Drawing 1,2, Building Science 1,2, Building Service 1,2, Design Communication and CADD, Construction Drawing, Building Information Modeling (REVIT)"

        },
        {
            name:"Architecture Project",
            year:"2018 ",
            institution:"Studio 1-2",
            desc:"Sunway Velocity Kiosk Design, Hulu Langat Tower and Ranger Station Design"

        },
        {
            name:"Architecture Project",
            year:"2019 ",
            institution:"Studio 3-4",
            desc:"Nudge on Scale and Proportion, Node Six Spaces and Beyond, Nostalgia Cross Generation Habitats, Master Planning on Tasik Kenyir, Pulau Sah Kecil Chalet Design, Pulau Sah Kecil Eco-Resort Main Facilities",
        },
        {
            name:"Architecture Project",
            year:"2020 (Bronze Award Final Year Project Competition) ",
            institution:"Studio 5-6",
            desc:"Site Analysis of South Klang City Centre 1.0, Adaptive- Reuse Project Located at Heritage Area, The Royal Town of Klang 2.0 (Townscape Appraisal & Urban Intervention)-Hive Hub Community Centre"


        }

    ],
    professionalExperience:[
        {
            name:"Internship",
            year:"2019",
            company:"IdeaWorkshop Sdn. Bhd.",
            descList:[
                "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
                "Lead in the construction drawing and submission drawing.",
                "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
                "Site Visit (Heritage Building Rstoration Project Melaka)"
            ]
        },
        {
            name:"Co-curricular",
            year:"2019",
            company:"Architecture Student Workshop 2019 (PAM) – xxx!!!nyala (29th May 2019 – 4th August 2019)",
            descList:[
                "Position: Secretary Head"
                
            ]
         },   
         {
            name:"Co-curricular",
            year:"2019",
            company:"Architecture Student Prom Night Savannah 2019 UTAR/DASD/UAS (1st January 2019 – 11th March 2019)",
            descList:[
                "Position: Sponsorship Head"  

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