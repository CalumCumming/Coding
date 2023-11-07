    function initMap() {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 50, lng: 5 }, // Set the initial map center
        zoom: 10 // Set the initial zoom level
      });

      // Load your JSON data and add markers or other custom data to the map
      d3.json("http://34.38.72.236/Circles/Towns/50", function(data) {
         console.log(data);
    });
      
      // Example code to load JSON data and add markers:
     d3.json("http://34.38.72.236/Circles/Towns/50")
        .then(data => 
            data.forEach(town => {
                const position = { lat: town.lat, lng: town.lng};

        // create a marker for towns
                 new google.maps.Marker({
                    position: position,
                    map: map,
                    title: town.name 
                 });
            });
        })
    .catch(error => {
        console.error("Failed to load data:", error);
    });
}

    
