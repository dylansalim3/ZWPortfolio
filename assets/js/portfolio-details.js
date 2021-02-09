urlp = [];
s = location.toString().split('?');
s = s[1].split('&');
for (i = 0; i < s.length; i++) {
    u = s[i].split('=');
    urlp[u[0]] = u[1];
}
console.log(urlp['id'])
var itemId = urlp['id'];


// Data Mapping
var filterTypes = portfolioData.filterType;
var portfolio = portfolioData.portfolioContentList[itemId];
var name = portfolio.name;
var photoSlideshowList = portfolio.photoSlideshowList;
var type = portfolio.type;
var client = portfolio.client;
var date = portfolio.date;
var url = portfolio.url;
var desc = portfolio.desc;
function init_carousel() {
    $('.owl-carousel').owlCarousel();
}
photoSlideshowList.forEach(function (imgUrl, index) {
    $('.owl-carousel').owlCarousel('add', `<img src="${imgUrl}" class="img-fluid" alt="portfolio-detail-${index}">`)
        .owlCarousel('update');
    $('#photo-slideshow').owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    })

});
$(".portfolio-title").text(name);


$('#category').text(filterTypes[type].name);
$('#client').text(client);
$('#date').text(date);
$('#project-url').append(`<a href="${url}">${url}</a>`);
$('#portfolio-desc').text(desc);

