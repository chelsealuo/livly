/* global google */
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import ViewPins from './loadLatLong.js';
// import { noop } from '@react-google-maps/api/dist/utils/noop';


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
        {<Marker position={{ lat: 42.44002635772674, lng: -76.4960299581114 }} />}
        {<Marker position={{ lat: 42.450929020524846, lng: -76.4862543176256}} />}
        {<Marker position={{ lat: 42.45148056310116, lng:-76.48356544646057}} />}
        {<Marker position={{ lat: 42.535814651436596, lng:-76.61081644924307 }} />}
        {<Marker position={{ lat: 42.45297676509575, lng: -76.48053095776096}} />}
        {<Marker position={{ lat: 42.439747609960996, lng: -76.493203773451 }} />}
        {<Marker position={{ lat: 42.43885989017599, lng:-76.50755111578094}} />}
        {<Marker position={{ lat: 42.41659585486871, lng:-76.53516661578168}} />}
        {<Marker position={{ lat: 42.4533676158729, lng: -76.49143965724075 }} />}
        <></>

      </GoogleMap>
  ) : <></>
}

export default React.memo(Explore)