var personalInfo = {
    websiteTitle: "Elise Studio",
    name: "Lim Zhi Wei ",
    location:"Address",
    footer: "Footer Text",
    linkedin: "https://www.google.com",
    instagram: "https://www.google.com",
    whatsapp: "https://www.google.com",
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
    education: [
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
    professionalExperience: [
        {
            name:"Internship",
            year:"2019",
            company:"IdeaWorkshop Sdn. Bhd.",
            descList:[
                "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
                "Lead in the construction drawing and submission drawing.",
                "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design",
                "Site Visit (Heritage Building Restoration Project Melaka)"
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

var portfolioData = {
    portfolioDesc: "Here is my portfolio",
    filterType: {
        A: {
            shortName: "Web",
            name: "Web Development"
        },
        B: {
            shortName: "Card",
            name: "Card Development"
        },
        C: {
            shortName: "Mobile",
            name: "Mobile Development"
        }
    },
    portfolioContentList: [
        {
            shortName: "App 1",
            name:"Application 1",
            type: "A",
            galleryPhoto: "assets/img/portfolio/portfolio-1.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/portfolio-details-1.jpg",
                "assets/img/portfolio/portfolio-details-2.jpg",
                "assets/img/portfolio/portfolio-details-3.jpg"
            ],
            client:"Company X",
            date:"19 Jan 2020",
            url:"www.google.com",
            desc:"Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."
        },
        {
            shortName: "App 2",
            name:"Application 2",
            type: "B",
            galleryPhoto: "assets/img/portfolio/portfolio-2.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/portfolio-details-1.jpg",
                "assets/img/portfolio/portfolio-details-2.jpg",
                "assets/img/portfolio/portfolio-details-3.jpg"
            ],
            client:"Company Y",
            date:"19 Jan 2019",
            url:"www.google.com",
            desc:"Autem WRFGWRFG rro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."
        },
        {
            shortName: "App 3",
            name:"Application 3",
            type: "C",
            galleryPhoto: "assets/img/portfolio/portfolio-3.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/portfolio-details-1.jpg",
                "assets/img/portfolio/portfolio-details-2.jpg",
                "assets/img/portfolio/portfolio-details-3.jpg"
            ],
            client:"Company Y",
            date:"19 Jan 2018",
            url:"www.A.com",
            desc:"Autem FCW GERTH. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius."
        },

    ]
}

