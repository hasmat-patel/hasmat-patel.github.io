var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map-post-canvas"), {
    center: new google.maps.LatLng(45.0672774, -93.3096998),
    zoom: 12,
  });

  var iconBase = "http://13.235.236.166/HTML/auto-approve-html/html/assets/images/icons/custom/";

  var icons = {
    info: {
      icon: iconBase + "pin-custom1.png",
    },
  };

  var features = [
    {
      position: new google.maps.LatLng(45.0672774, -93.3096998),
      type: "info",
    },
  ];

  // Create markers.
  for (var i = 0; i < features.length; i++) {
    var marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
