var nav = $('nav');
var navHeight = nav.outerHeight();
// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
});
/*--/ End Scrolling nav /--*/

/*--/ Navbar Menu Reduce /--*/
$(window).scroll(function () {
    var pixels = 50;
    var top = 1200;
    if ($(this).scrollTop() > pixels) {
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
        $('.navbar-expand-md').addClass('navbar-trans');
        $('.navbar-expand-md').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
        $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
        $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
});

// Data Mapping

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
skillsData.skills.forEach(function ({name, percentage}, index) {
    var data = `<div class="progress">
                        <span class="skill">${name} <i class="val">${percentage}%</i></span>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" role="progressbar" aria-valuenow="${percentage}" aria-valuemin="0"
                                 aria-valuemax="100"></div>
                        </div>
                    </div>`;

    if (skillSize / 2 > index) {
        $('#skill-progress-1').append(data);
    } else {
        $('#skill-progress-2').append(data);
    }
})

//Resume Data
$('#resumeDesc').text(resumeData.resumeDesc);
resumeData.summary.summaryList.forEach(function (item) {
    var elem = `<li>${item}</li>`;
    $("#ul-summary-list").append(elem);
});

resumeData.education.forEach(function ({name, year, institution, desc}) {
    var elem = `<div class="resume-item">
                        <h4>${name}</h4>
                        <h5>${year}</h5>
                        <p><em>${institution}</em></p>
                        <p>${desc}</p>
                    </div>`;
    $('#resume-education-content').append(elem);
});
resumeData.professionalExperience.forEach(function ({name, year, company, descList}) {
    var desc = descList.map(function (item) {
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

var filterTypes = portfolioData.filterType;
$('#filter-a').text(filterTypes['A'].shortName);
$('#filter-b').text(filterTypes['B'].shortName);
$('#filter-c').text(filterTypes['C'].shortName);

// $('.lazyload').lazyload({effect : "fadeIn"})

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    
      
      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
      }, 20);
    }
    
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });

var portfolioElem = "";
portfolioData.portfolioContentList.forEach(function ({shortName, type, galleryPhoto}, index) {
    var filterClass = "filter-a";
    if (type === 'B') {
        filterClass = "filter-b";
    } else if (type === 'C') {
        filterClass = "filter-c";
    }

    portfolioElem += `<div class="col-lg-4 col-md-6 portfolio-item ${filterClass}">
                    <div class="portfolio-wrap">
                        <img data-src="${galleryPhoto}" loading="lazy" class="img-fluid lazy" alt="">
                        <div class="portfolio-info">
                            <h4>${shortName}</h4>
                            <p>${filterTypes[type].shortName}</p>
                            <div class="portfolio-links">
                                <a href="${galleryPhoto}" data-gall="portfolioGallery"
                                   class="venobox" title="${shortName}"><i class="bx bx-plus"></i></a>
                                <a href="portfolio-details.html?id=${index}" data-gall="portfolioDetailsGallery"
                                   data-vbtype="iframe" class="venobox" title="Portfolio Details"><i
                                        class="bx bx-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>`

    
});
$('#portfolio-content').append(portfolioElem);

// function load(img)
// {
//   img.fadeOut(0, function() {
//     img.fadeIn(1000);
//   });
// }

// const observer = lozad();
// observer.observe();


$('#contact-address').text(personalInfo.location);
$("#contact-email").text(aboutInfo.email);
$("#contact-phone").text(aboutInfo.phone);

$(".instagram").attr('href', personalInfo.instagram);
$(".linkedin").attr('href', personalInfo.linkedin);
$(".kuula").attr('href', personalInfo.kuula);

$('#resume-link').attr('href', personalInfo.resume);

$('#portfolio-link').attr('href', personalInfo.portfolio);


//Footer
$("#footer-text").text(personalInfo.footer);

$(document).ready(function () {
    $('.php-email-form').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Get form values
        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('textarea[name="message"]').val();
        
        // Construct the email body
        const emailBody = `Name: ${name}\n\nMessage: ${message}`;
        
        // Update the form action with the dynamically constructed data
        const form = $(this);
        $.ajax({
            url: form.attr('action'),
            type: form.attr('method'),
            data: {
                name: name,
                email: email,
                subject: subject,
                message: emailBody
            },
            success: function (response) {
                $('.sent-message').show();
                $('.error-message').hide();
            },
            error: function () {
                $('.error-message').show();
                $('.sent-message').hide();
            }
        });
    });
});