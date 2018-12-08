   var map, places;
      var geocoder;
      var marker;

      function initMap() {
        var initialLat = $('.search_latitude').val();
        var initialLong = $('.search_longitude').val();
        initialLat = initialLat?initialLat:40.712776;
        initialLong = initialLong?initialLong:-74.005974;
        
          let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 2000)
          });
        
        var latlng = new google.maps.LatLng(initialLat, initialLong);

        map = new google.maps.Map(document.getElementById('map'), {
          center: latlng,
          zoom: 12
        });

        geocoder = new google.maps.Geocoder();
        
        marker = new google.maps.Marker({
            map: map,
            draggable: true,
            position: latlng
        });

        google.maps.event.addListener(marker, "dragend", function () {
            var point = marker.getPosition();
            map.panTo(point);
            geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    marker.setPosition(results[0].geometry.location);
                    $('.search_addr').val(results[0].formatted_address);
                    $('.search_latitude').val(marker.getPosition().lat());
                    $('.search_longitude').val(marker.getPosition().lng());
                }
            });
        });
    }

        $(document).ready(function () {
        //load google map
        initMap();
    
        /*
         * autocomplete location search
         */
        var PostCodeid = '#search';
        $(function () {
            $(PostCodeid).autocomplete({
                source: function (request, response) {
                    geocoder.geocode({
                        'address': request.term
                    }, function (results, status) {
                        response($.map(results, function (item) {
                            return {
                                label: item.formatted_address,
                                value: item.formatted_address,
                                lat: item.geometry.location.lat(),
                                lon: item.geometry.location.lng()
                            };
                        }));
                    });
                },
                select: function (event, ui) {
                    $('.search_addr').val(ui.item.value);
                    $('.search_latitude').val(ui.item.lat);
                    $('.search_longitude').val(ui.item.lon);
                    var latlng = new google.maps.LatLng(ui.item.lat, ui.item.lon);
                    marker.setPosition(latlng);
                    initMap();
                }
            });
        });
        
        /*
         * Point location on google map
         */
        $('.get_map').click(function (e) {
            var address = $(PostCodeid).val();
            geocoder.geocode({'address': address}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    marker.setPosition(results[0].geometry.location);
                    $('.search_addr').val(results[0].formatted_address);
                    $('.search_latitude').val(marker.getPosition().lat());
                    $('.search_longitude').val(marker.getPosition().lng());
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
            e.preventDefault();
        });

        //Add listener to marker for reverse geocoding
        google.maps.event.addListener(marker, 'drag', function () {
            geocoder.geocode({'latLng': marker.getPosition()}, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        $('.search_addr').val(results[0].formatted_address);
                        $('.search_latitude').val(marker.getPosition().lat());
                        $('.search_longitude').val(marker.getPosition().lng());
                    }
                }
            });
        });

      //   places = new google.maps.places.PlacesService(map);

      // function onPlaceChanged() {
      //   var place = autocomplete.getPlace();
      //   if (place.geometry) {
      //     map.panTo(place.geometry.location);
      //     map.setZoom(15);
      //     search();
      //   } else {
      //     document.getElementById('autocomplete').placeholder = 'Enter a city';
      //   }
      // }

      //   places.nearbySearch(search, function(results, status) {
      //     if (status === google.maps.places.PlacesServiceStatus.OK) {
      //       clearResults();
      //       clearMarkers();
      //       // Create a marker for each hotel found, and
      //       // assign a letter of the alphabetic to each marker icon.
      //       for (var i = 0; i < results.length; i++) {
      //         var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
      //         var markerIcon = MARKER_PATH + markerLetter + '.png';
      //         // Use marker animation to drop the icons incrementally on the map.
      //         markers[i] = new google.maps.Marker({
      //           position: results[i].geometry.location,
      //           animation: google.maps.Animation.DROP,
      //           icon: markerIcon
      //         });
      //         // If the user clicks a hotel marker, show the details of that hotel
      //         // in an info window.
      //         markers[i].placeResult = results[i];
      //         google.maps.event.addListener(markers[i], 'click', showInfoWindow);
      //         setTimeout(dropMarker(i), i * 100);
      //         addResult(results[i], i);
      //       }
      //     }
      //   });
});
        // var searchBox = new google.maps.places.SearchBox(document.getElementById('searchDiv'));

        // google.maps.event.addListener(searchBox, 'places_changed', function(){

        //     var places = searchBox.getPlaces();

        //     var bounds = new google.maps.LatLngBounds();
        //     var i, place;

        //     for(i=0;place=places[i];i++){
        //         bounds.extend(place.geometry.location);
        //         marker.setPosition(place.geometry.location);
        //     }

        //     map.fitBounds(bounds);
        //     map.setZoom(15);
       // });