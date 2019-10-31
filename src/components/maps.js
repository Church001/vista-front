import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [
        { latitude: 9.037831, longitude: 7.383967 }, //Abuja
        { latitude: 6.537404, longitude: 3.332335 }, //Lagos
        { latitude: 4.815417, longitude: 7.049736 }, //PH
        { latitude: 7.361452, longitude: 3.869656 }, //Ibadan
        { latitude: 11.84588, longitude: 13.143745 }, //Maiduguri
        { latitude: 12.014434, longitude: 8.572272 }, //Kano
        { latitude: 10.444833, longitude: 7.400554 } //Kaduna
      ]
    };
  }

  variousStores = () => {
    return this.state.stores.map(store => {
      return (
        <Marker
          key={store.latitude}
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
        zoom={6}
        style={mapStyles}
        initialCenter={{ lat: 9, lng: 8.6 }}
        onClick={this.onMapClicked}
      >
        {this.variousStores()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apikey: 'AIzaSyDKjYADwaHwaCBY1CVVdJlcef_6rJAmb6I',
  LoadingContainer: () => <div>{''}</div>
})(Maps);
