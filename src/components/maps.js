import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.3084488, longitude: -122.2140121 },
        { latitude: 47.5524695, longitude: -122.0425407 }
      ]
    };
  }

  variousStores = () => {
    return this.state.stores.map(store => {
      return (
        <Marker
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
        />
      );
    });
  };
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        {this.variousStores()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  // apikey:''
})(Maps);
