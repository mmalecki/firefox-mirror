var geolocation = require('./geolocation.js');

const LOCATION = {
  latitude: 52.359954,
  longitude: 4.885177
};

geolocation(LOCATION, document.getElementById('distance'));
