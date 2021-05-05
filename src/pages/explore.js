import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  paddingTop:'60px',
  width: '100%',
  height: '600px'
};

const center = {
  lat: 42.443962,
  lng: -76.501884
};

const myLatLng = { lat: 42.443962, lng: -76.501884 };


function Explore() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA7umAlHeG5FwqqxC0emqR7MTyugFN755Q"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  new window.google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Explore)
