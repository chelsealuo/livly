import { useJsApiLoader } from '@react-google-maps/api';

export default function IsLoaded() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA7umAlHeG5FwqqxC0emqR7MTyugFN755Q"
      })

    return isLoaded;
  }