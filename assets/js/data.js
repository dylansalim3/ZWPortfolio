var personalInfo = {
    websiteTitle: "Elise Studio",
    name: "Lim Zhi Wei  ",
    location:"Address",
    footer: "Nature . Culture",
    linkedin: "https://www.linkedin.com/in/zhi-wei0319/",
    instagram: "https://www.instagram.com/hoseh_bor/",
    whatsapp: "https://kuula.co/share/72l6b?fs=1&vr=0&sd=1&thumbs=1&info=1&logo=1",
    resume:"https://github.com/dylansalim3/ZWPortfolio/raw/master/resume/Lim_Zhi_Wei-Resume.pdf"
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
                "Heritage Building Restoration Project Melaka"
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
        },   
         {
            name:"Personal Project",
            year:"Dec 2020- Jan 2021",
            company:"Work Room Design, Furniture Design, Community Space Post-Production",
            descList:[
                "Design Concept, 2D&3D Rendering, Construction Plan, HDR Video "         

            ]     
        }
    ]
}

var portfolioData = {
    portfolioDesc: "Here is my portfolio",
    filterType: {
        A: {
            shortName: "Model",
            name: "Scale Modeling"
        },
        B: {
            shortName: "Project",
            name: "Studio Project"
        },
        C: {
            shortName: "Drawing",
            name: "Manual Drawing"
        }
    },
    portfolioContentList: [
        {
            shortName: "Sense",
            name:"Scale and Proportion",
            type: "A",
            galleryPhoto: "assets/img/portfolio/portfolio-1.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/portfolio-details-1.jpg",
                "assets/img/portfolio/portfolio-details-2.jpg",
                
            ],
            client:"Garden Meet Point (Space Quality） ",
            date:"2019",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"This project is a small practice during studio session. The aim of this project is to create space quality within a small area with the meet of scale and proportion."
        },
        {
            shortName: "Space",
            name:"Space Quality",
            type: "A",
            galleryPhoto: "assets/img/portfolio/portfolio-PA2.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/portfolio-details-a2-2.jpg",
                "assets/img/portfolio/portflio-details-a2-1.jpg",
                "assets/img/portfolio/20.jpg",
                "assets/img/portfolio/portflio-details-a2-3.jpg"
            ],
            client:"Serene Space ",
            date:"2019",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"The Building of 900 meter squares included with selected accommodation for the three generations, grandparents, parents and children. The site is located at a hillside of SAK DATO TEMPLE overlooking the whole village."
        },
        {
            shortName: "Creator",
            name:"Space Creation",
            type: "A",
            galleryPhoto: "assets/img/portfolio/portfolio3 -1.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/portfolio 3.jpg"
                
            ],
            client:"Wood Block Spaces ",
            date:"2019",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"The Building of 1 meter is created by using wooden block. This studio practice aim to enhance and create spaces."
        },
        {
            shortName: "Function",
            name:"Nature behaviour ",
            type: "A",
            galleryPhoto: "assets/img/portfolio/7.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/1.jpg",
                "assets/img/portfolio/14.jpg",
                "assets/img/portfolio/15.jpg",
                "assets/img/portfolio/16.jpg"
                
            ],
            client:" Flexia",
            date:"2019",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"The Building of Ranger Station located at the Recreational Forest, Hulu Langat with fuction to protect and do research on the surrounding nature. There are three main spaces in the building, Sight Seeing on Ground Area, Research Lab and Gallery "
        },
        {
        shortName: "Function",
            name:"Nature behaviour ",
            type: "A",
            galleryPhoto: "assets/img/portfolio/9.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/8.jpg",
                "assets/img/portfolio/PRESENTATION BOARD A2(1).jpg",
                "assets/img/portfolio/PRESENTATION BOARD A2 (2).jpg",
                "assets/img/portfolio/21.jpg"
                
            ],
            client:" Meander of River",
            date:"2019",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"The Building of Ranger Tower located at the Recreational Forest, Hulu Langat with fuction to protect and do research on the surrounding nature. Design a look out tower known as 'River' which has taken its full meandering pattern through the idyllic landscape. The structure extends with continual steel bar as support system. The idea of this shape seeks to blend with features of the landscape while offering additinal functionality to the forest."
        },
        {
        shortName: "Pattern",
            name:"Scale and Proportion",
            type: "A",
            galleryPhoto: "assets/img/portfolio/sdsd.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/sd.jpg"
                
            ],
            client:"Crop pattern",
            date:"2019",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"To study the crop pattern with the precedent study of China Architecture"
        },
        {
        shortName: "Shape",
            name:"Shape and Spaces",
            type: "A",
            galleryPhoto: "assets/img/portfolio/WhatsApp Image 2020-09-20 at 11.16.07 AM (2).jpg",
            photoSlideshowList:[
                "assets/img/portfolio/WhatsApp Image 2020-09-20 at 11.16.07 AM (3).jpg",
                "assets/img/portfolio/WhatsApp Image 2020-09-20 at 11.16.07 AM (1).jpg",
                "assets/img/portfolio/WhatsApp Image 2020-09-20 at 11.16.07 AM.jpg"
            ],
            client:"Shape Study",
            date:"2018",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Concept Model of Hive Hub Community Space  "
        },
        {
        shortName: "Shape",
            name:"Shape and Spaces",
            type: "A",
            galleryPhoto: "assets/img/portfolio/WhatsApp Image 2020-09-20 at 11.16.07 AM (4).jpg",
            photoSlideshowList:[
                "assets/img/portfolio/WhatsApp Image 2020-09-20 at 11.16.08 AM (3).jpg",
                "assets/img/portfolio/WhatsApp Image 2020-09-20 at 11.16.08 AM (4).jpg",
                "assets/img/portfolio/WhatsApp Image 2020-09-20 at 11.16.08 AM (8).jpg"
            ],
            client:"Shape Study",
            date:"2018",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Final Model of Hive Hub Community Space  "
        },
        {
            shortName: "The Seed",
            name:"Eco Learning Resort. Training Centre",
            type: "B",
            galleryPhoto: "assets/img/portfolio/tambah max super.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/Presentation1.jpg",
                "assets/img/portfolio/3.jpg",
                "assets/img/portfolio/Presentation1C.jpg"
            ],
            client:"Local Attraction",
            date:"2019",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"The SEED created by the sacred geometry. Inspired by the six day of creatino as a seed of life. Pulau Sah Kecil located at the Terengganu with golden flora and fauna is an ideal of natural gateway. The concept of THE SEED will be represented into three parts:BORN, GROW AND REBORN. Each of the zoning will have respective identity colour of green, brown and white. The building materials mainly used from local with biophilic design concepts."
        },
        {
            shortName: "Structure",
            name:"Cantiliver",
            type: "B",
            galleryPhoto: "assets/img/portfolio/PERPSEC WHOLE.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/PERPSEC WHOLE.jpg",
                "assets/img/portfolio/PLAN VIEW.jpg",
                "assets/img/portfolio/RIGHT ELE (2).jpg"
            ],
            client:"Studio Practice",
            date:"2019",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Study of structural cantiliver load."
        },
        {
            shortName: "Transmute",
            name:"Senior and Youth Community Centre",
            type: "B",
            galleryPhoto: "assets/img/portfolio/DROP OFF.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/ENTARANCE 2.jpg",
                "assets/img/portfolio/NICE LAH.jpg",
                "assets/img/portfolio/AERAIL VIEW.jpg",
                "assets/img/portfolio/dadas.jpg",
                "assets/img/portfolio/Presentasdtion1.jpg",
                "assets/img/portfolio/sadas.jpg",
            ],
            client:"Community",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Klang South City Centre is a city that undergoing aging process. Many Youngster are more willingly to move out from this area to find a job opportunity. This area had reached to the stable state as no development taking place. The chosen site B is one of the starting point that havong potential value to be transmute not only the building itself, also the whole community. Senior citizen and youth project aim to revitalize the community from the pass and reimagine the possibilities of the future together with the senior and the youth.    "
        },
        {
            shortName: "Community Space",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/sky view 3.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/pasar 1）Photoshop.jpg",
                "assets/img/portfolio/sky view 3.jpg"
                
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"The hexagonal shape represent the bonding community. Radial shape as a centre meeting zone. Hive Hub is a Community centre which benefit to the local people and tourists that visit North Klang. The centre function as education hub, sports area & co-working space. The aim of Hive Hub is to encourage the community to gather together, learn and shop at one station. "
        },
        {
            shortName: "Piazza",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/garden2 photoshop.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/garden2 photoshop.jpg"
                
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Centre Meeting zone at the front entrance  "
        },
        {
            shortName: "Waiting Area",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/WAITING 3 PHOTOSHOP.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/WAITING 3 PHOTOSHOP.jpg",
                "assets/img/portfolio/WAITING AREA1psd.jpg"
                
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Waiting Area located at the front entrance as a buffer zone to the Hive Hub community centre  "
        },
        {
            shortName: "Public Market",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/PUBLIC MARKETpsd.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/PUBLIC MARKETpsd.jpg"
                  
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Public Market provided to the Hive Hub Community Centre as to benefit the surrounding neighbourhood."
        },
        {
            shortName: "Food Market",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/food market2 psd.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/food market2 psd.jpg"
                  
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Food Market located near the front entrance benefit to the neighbourhood  ."
        },
        {
            shortName: "Hive Cafe",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/cafe 4_2psd - Photo.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/cafe 4_10psd - Photo.jpg",
                "assets/img/portfolio/cafe 4_3psd - Photo.jpg",
                  
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Mezzanine Floor construction with open kitchen style cafeteria."
        },
        {
            shortName: "Basketball Court",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/basketball psd.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/basketball psd.jpg",
                "assets/img/portfolio/basketball view 2rd floor psd.jpg"
                  
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Basketball court as the attraction point for the youth nearby the neighbourhood."
        },
        {
            shortName: "Reception",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/RECEPTION PSD.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/RECEPTION PSD.jpg"
                  
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Second Floor Reception as a semi-private area for co-working space located nearby the vertical circulation."
        },
        {
            shortName: "Exterior Event Space",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/exterior event space psd - Photo.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/exterior event space psd - Photo.jpg"
                      
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Free and balance space without seperated by wall created at the second floor of the Hive Hub Community Space."
        },
        {
            shortName: "Multipurpose Hall",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/CO-WORKING_22psd - Photo.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/CO-WORKING_22psd - Photo.jpg"
                      
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Open Ceiling design to create opportunity of height extend and increase natural light."
        },
        {
            shortName: "Corridor",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/corridor gf PSD.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/3RD FLOR CORRIDOR PSD - Photo.jpg",
                "assets/img/portfolio/corridor gf PSD.jpg"
                      
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" wide walkway as to create smoother circulation to the Hive Hub ."
        },
        {
            shortName: "Bicycle pathway",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/BICYCLE 1PSD.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/BICYCLE 1PSD.jpg"
                       
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Bicycle Pathway provide to encourage the neighbourhood to do exercise and promote the benefit to nature."
        },
         {
            shortName: "Bridge",
            name:"Hive Hub",
            type: "B",
            galleryPhoto: "assets/img/portfolio/bridge psd - Photo.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/bridge psd - Photo.jpg"
                       
            ],
            client:"Local Attraction",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Construct with light weight steel support and polycarbonate facade as to provide sight seeing area to the community."
        },
         {
            shortName: "Work Room",
            name:"Renovation Project & Furniture Design",
            type: "B",
            galleryPhoto: "assets/img/portfolio/wah1.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/wah1.jpg",
                "assets/img/portfolio/Lumion 10 Pro 正版授权.jpg",
                "assets/img/portfolio/Lumion 10 Pro 正版授权BFF.jpg",
                       
            ],
            client:"20 YEARS DOUBLE STOREY HOUSE",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Remain the existing, only design for work space and wardrobes design."
        },
        {
            shortName: "REVIT",
            name:"BIM Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/2.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/2.jpg",
                "assets/img/portfolio/17.jpg"
               
            ],
            client:"Studio Practice",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Single-Storey House Design."
        },
        {
            shortName: "REVIT",
            name:"BIM Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/18.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/dsfdsfdsf.jpg",
                 "assets/img/portfolio/sdfdsf.jpg",
                "assets/img/portfolio/sdfsdfdsfsd.jpg"
               
            ],
            client:"Studio Practice",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:"Commercial Building Design using REVIT software."
        },
        {
            shortName: "Manual",
            name:"Exploded Axonometric",
            type: "C",
            galleryPhoto: "assets/img/portfolio/EXPLODED.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/EXPLODED.jpg"
                 
               
            ],
            client:"Studio Practice",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Scale Manual Drawing."
        },
        {
            shortName: "Manual",
            name:"Manual Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/Untitled-1.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/Untitled-1.jpg"
                 
               
            ],
            client:"Studio Practice",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Section Detail Drawing."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/AXONOMETRIC.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/AXONOMETRIC.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Exploded Axonometric."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/SEXTION CUT PERSPECTIVE.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/SEXTION CUT PERSPECTIVE.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Section Perspective ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/gf.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/gf.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Ground Floor Plan ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/1_20.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/1_20.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" 1:20  Section Plan ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/2rd floor detail.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/2rd floor detail.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" 1:5 Detail Section Plan ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/front ele.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/front ele.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Front Eelevation Plan ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/1st flr.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/1st flr.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" First Floor Plan ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/REAR ELE.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/REAR ELE.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Rear Elevation Plan ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/2rd flooor.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/2rd flooor.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Second Floor Plan ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/LEFT ELE.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/LEFT ELE.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Left Elevation ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/right ele.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/right ele.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Right Elevation ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/ss.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/ss.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Exploded Detail Perspective(Steel Glass Railing) ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/steel deck detail.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/steel deck detail.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Steel Decking Detail Section Plan ."
        },
        {
            shortName: "FYP Board",
            name:"Post Production Drawing",
            type: "C",
            galleryPhoto: "assets/img/portfolio/3rd floor.jpg",
            photoSlideshowList:[
                "assets/img/portfolio/3rd floor.jpg"
                 
               
            ],
            client:"Hive Hub Community Centre",
            date:"2020",
            url:"https://www.instagram.com/hoseh_bor/",
            desc:" Third Floor Plan ."
        },
       



    ]
}

