function initMap() {
  var uluru = {lat: 59.936060, lng: 30.321135};
  var map = new google.maps.Map(document.getElementById("contacts__map"), {
    zoom: 16,
    center: {lat: 59.936660, lng: 30.321135},
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: "Pink",
    icon: {
      url: "../img/icon-map-marker.svg",
      scaledSize: new google.maps.Size(36, 36)
    }
  });
}
