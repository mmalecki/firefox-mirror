var geodist = require('geodist');

module.exports = function (location, element) {
  navigator.geolocation.watchPosition(function (position) {
    console.dir(position);
    var distance = geodist({
      lat: position.coords.latitude,
      lot: position.coords.longitude
    }, {
      lat: location.latitude,
      lot: location.longitude
    }, { unit: 'meters' });
    var rad = Math.atan(
      (position.coords.latitude - location.latitude) /
      (position.coords.longitude - location.longitude)
    );

    console.log('Calculated distance: ' + distance);
    element.innerHTML = distance.toString() + ' m (' + rad.toFixed(2) + ')';
  });
};
