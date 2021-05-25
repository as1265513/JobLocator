import React, { useEffect, useRef } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import Geocoder from 'react-native-geocoding';

// Initialize the module (needs to be done only once)
Geocoder.init("AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg"); // use a valid API key
// With more options
// Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

// Search by address
Geocoder.from("Multan")
		.then(json => {
			var location = json.results[0].geometry.location;
			console.log(location);
		})
		.catch(error => console.warn(error));

// Search by address, with a biased geo-bounds
Geocoder.from("karachi", {
		southwest: {lat: 36.05, lng: -115.25},
		northeast: {lat: 36.16, lng: -115.10}})
		.then(json => {
			var location = json.results[0].geometry.location;
			console.log(location);
		})
		.catch(error => console.warn(error));

// Search by geo-location (reverse geo-code)
Geocoder.from(31.5204, 74.3587)
		.then(json => {
        		var addressComponent = json.results[0].address_components[0];
			console.log(addressComponent);
		})
		.catch(error => console.warn(error));

// Works as well :
// ------------

// // location object
// Geocoder.from({
// 	latitude : 41.89,
// 	longitude : 12.49
// });

// // latlng object
// Geocoder.from({
// 	lat : 41.89,
// 	lng : 12.49
// });
