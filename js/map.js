function initialize() {
    var mapOptions = {
        zoom: 16,
        center: new google.maps.LatLng(51.068858, 13.716050)
    };
    var iconBase = "http://maps.google.com/mapfiles/kml/paddle/";

    var map = new google.maps.Map(document.getElementById('map-div'),
                      mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(51.068858, 13.716060),
        map: map,
        icon: iconBase + 'red-circle.png'
    });
    iconBase = "https://maps.google.com/mapfiles/kml/shapes";
    var markerp = new google.maps.Marker({
        position: new google.maps.LatLng(51.067566, 13.719582),
        map: map,
        icon: iconBase + 'parking_lot.png'
    });

}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
                  '&signed_in=true&callback=initialize';
    document.body.appendChild(script);
}

$(function () {
    if ($("#navButton").length == 0) {
        loadScript();
    }
    else {
        $("#map-link").show();
        $("#map-div").hide();
    }
});

