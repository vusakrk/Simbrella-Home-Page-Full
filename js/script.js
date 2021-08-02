window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 150);

});
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('header .logo img').attr('src', 'https://www.simbrella.com/site/templates/img/logo_colored.svg');

        }
        if ($(this).scrollTop() < 150) {
            $('header .logo img').attr('src', 'https://www.simbrella.com/site/templates/img/logo.svg');
        }
    })
});

window.addEventListener('scroll', function() {
    const poweredSolutions = document.querySelector('.poweredSolutions');
    var scrollPosition = window.pageYOffset;
    poweredSolutions.getElementsByClassName.transform = 'translateY(' + scrollPosition * .5 + 'px)'
});

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-sine', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'bottom-top', // defines which position of the element regarding to window should trigger the animation

});
$('.counter').countUp({
    'time': 2000,
    'delay': 10
});


am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Exclude Antartica
    polygonSeries.exclude = ["AQ"];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;


    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0);

    // Add image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "{title}";
    imageSeries.mapImages.template.propertyFields.url = "url";

    var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 4;
    circle.propertyFields.fill = "color";
    circle.nonScaling = true;

    var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 5;
    circle2.propertyFields.fill = "color";


    circle2.events.on("inited", function(event) {
        animateBullet(event.target);
    })


    function animateBullet(circle) {
        var animation = circle.animate([{ property: "scale", from: 1 / chart.zoomLevel, to: 5 / chart.zoomLevel }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
        animation.events.on("animationended", function(event) {
            animateBullet(event.target.object);
        })
    }

    var colorSet = new am4core.ColorSet();

    imageSeries.data = [{
        "title": "Brussel",
        "latitude": 50.8371,
        "longitude": 4.3676,
        "color": colorSet.next()
    }, {
        "title": "Copenhagen",
        "latitude": 55.6763,
        "longitude": 12.5681,
        "color": colorSet.next()
    }, {
        "title": "Paris",
        "latitude": 48.8567,
        "longitude": 2.3510,
        "color": colorSet.next()
    }, {
        "title": "Reykjavik",
        "latitude": 64.1353,
        "longitude": -21.8952,
        "color": colorSet.next()
    }, {
        "title": "Moscow",
        "latitude": 55.7558,
        "longitude": 37.6176,
        "color": colorSet.next()
    }, {
        "title": "Madrid",
        "latitude": 40.4167,
        "longitude": -3.7033,
        "color": colorSet.next()
    }, {
        "title": "London",
        "latitude": 51.5002,
        "longitude": -0.1262,
        "url": "http://www.google.co.uk",
        "color": colorSet.next()
    }, {
        "title": "Peking",
        "latitude": 39.9056,
        "longitude": 116.3958,
        "color": colorSet.next()
    }, {
        "title": "New Delhi",
        "latitude": 28.6353,
        "longitude": 77.2250,
        "color": colorSet.next()
    }, {
        "title": "Tokyo",
        "latitude": 35.6785,
        "longitude": 139.6823,
        "url": "http://www.google.co.jp",
        "color": colorSet.next()
    }, {
        "title": "Ankara",
        "latitude": 39.9439,
        "longitude": 32.8560,
        "color": colorSet.next()
    }, {
        "title": "Buenos Aires",
        "latitude": -34.6118,
        "longitude": -58.4173,
        "color": colorSet.next()
    }, {
        "title": "Brasilia",
        "latitude": -15.7801,
        "longitude": -47.9292,
        "color": colorSet.next()
    }, {
        "title": "Ottawa",
        "latitude": 45.4235,
        "longitude": -75.6979,
        "color": colorSet.next()
    }, {
        "title": "Washington",
        "latitude": 38.8921,
        "longitude": -77.0241,
        "color": colorSet.next()
    }, {
        "title": "Kinshasa",
        "latitude": -4.3369,
        "longitude": 15.3271,
        "color": colorSet.next()
    }, {
        "title": "Cairo",
        "latitude": 30.0571,
        "longitude": 31.2272,
        "color": colorSet.next()
    }, {
        "title": "Pretoria",
        "latitude": -25.7463,
        "longitude": 28.1876,
        "color": colorSet.next()
    }];



}); // end am4core.ready()



$('#nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'

});