/* global google */
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  paddingTop:'60px',
  width: '100%',
  height: '600px'
};

const center = {
  lat: 42.443962,
  lng: -76.501884
};

function Explore() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyA7umAlHeG5FwqqxC0emqR7MTyugFN755Q"
  })

  // const [map, setMap] = React.useState(null)
  //
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])
  //
  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        initialCenter={center}
        center={center}
        zoom={15}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        {<Marker position={{ lat: 42.443962, lng: -76.502884 }} />}
        <></>

      </GoogleMap>
  ) : <></>
}

export default React.memo(Explore)