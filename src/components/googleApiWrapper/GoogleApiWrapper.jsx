import "./googleApiWrapper.css";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleApiWrapper = () => {
  return (
    <div className="googleApiWrapper">

    <LoadScript  googleMapsApiKey="AIzaSyB6IGw9koHCAA6Oa8q8eyN_qle0XKnuUCE">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
}

export default GoogleApiWrapper;



