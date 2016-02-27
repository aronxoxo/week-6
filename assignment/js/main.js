var censusTractCenterCity = "https://raw.githubusercontent.com/aronxoxo/week-6/master/assignment/datasets/Philadelphia_Census_Tracts_2010.geojson";

$(document).ready(function() {
  $.ajax(censusTractPhilly).done(function(data) {
    var parsedData = JSON.parse(data);
    // var myFeatureGroup = L.geoJson(parsedData).addTo(map);
    // });
});


/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
