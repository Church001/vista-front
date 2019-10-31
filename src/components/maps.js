import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import LOGO from '../assets/img/logo.png';

export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfoWindow: false,
      marker: null,
      markerData: null,
      stores: [
        {
          latitude: 9.037831,
          longitude: 7.383967,
          name: 'Abuja',
          title: 'Our Abuja office',
          phone: '+2349053807969',
          address:
            'Plot 764 Cad Zone, C-16, Idu Industrial Area, Near Larfarge Plant Abuja.'
        }, //Abuja
        {
          latitude: 6.537404,
          longitude: 3.332335,
          name: 'Lagos',
          title: 'Our Lagos Office',
          phone: '+2348169110000',
          address:
            '2EB, Opposite Aswani Market, Osolo Way, Aswani-Oshodi Industrial Scheme, Isolo, Lagos.'
        }, //Lagos
        {
          latitude: 4.815417,
          longitude: 7.049736,
          name: 'PortHarcourt',
          title: 'Our PortHarcourt Office',
          phone: '+2348126300427',
          address:
            '270, Trans Amadi Industrial Layout, Triana Ltd Compound Near LG Shop, Opp Mainstreet Bank, PHC.'
        }, //PH
        {
          latitude: 7.361452,
          longitude: 3.869656,
          name: 'Ibadan',
          title: 'Our Ibadan Office',
          phone: '+2348126300108',
          address:
            '8, Ajia Street, Behind Capital Building, Off Ring Road, Ibadan.'
        }, //Ibadan
        {
          latitude: 11.84588,
          longitude: 13.143745,
          name: 'Maiduguri',
          title: 'Our Maiduguri Office',
          phone: '+2349053807969',
          address:
            'Former Leventis Supermarket, Opp Ramat Shopping Plaza, Maiduguri, Borno'
        }, //Maiduguri
        {
          latitude: 12.014434,
          longitude: 8.572272,
          name: 'Kano',
          title: 'Our Kano Office',
          phone: '+2348150865735',
          address: 'Kundial Road, Bompal Industrial Layout, Bompal, Kano.'
        }, //Kano
        {
          latitude: 10.444833,
          longitude: 7.400554,
          name: 'Kaduna',
          title: 'Our Kaduna Office',
          phone: '+2348126300272',
          address:
            'I5 Inuwa Abdulkadir Road, Industrial Estate, Kaduna South, Kaduna.'
        } //Kaduna
      ]
    };
  }

  onMapClicked = () => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        marker: null
      });
    }
  };

  markerOnClick = (props, marker) => {
    const data = { props, marker };
    const markerData = {
      position: props.position,
      name: marker.name,
      address: props.address,
      phone: props.phone
    };
    this.setState({
      marker: marker,
      showInfoWindow: marker ? true : false,
      markerData: markerData
    });
    console.log(data);
  };

  variousStores = () => {
    return this.state.stores.map(store => {
      return (
        <Marker
          onClick={this.markerOnClick}
          key={store.latitude}
          name={store.name}
          title={store.title}
          phone={store.phone}
          address={store.address}
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
    let place;
    if (this.state.markerData !== null) {
      place = this.state.markerData;
    }
    return (
      <Map
        google={this.props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={{ lat: 9, lng: 8.6 }}
        onClick={this.onMapClicked}
      >
        {this.variousStores()}
        <InfoWindow
          visible={this.state.showInfoWindow}
          marker={this.state.marker}
          style={{ maxWidth: 500 }}
        >
          <div>
            <div
              style={{
                width: 250,
                height: 100
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '100%'
                }}
                src={LOGO}
                alt={place ? place.name : ''}
              />
            </div>
            <hr />
            <h1>{place ? place.name : ''}</h1>
            <span>
              <p>{place ? place.address : ''}</p>
            </span>
            <h3>TEL: {place ? place.phone : ''}</h3>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDKjYADwaHwaCBY1CVVdJlcef_6rJAmb6I',
  LoadingContainer: () => <div>{''}</div>
})(Maps);
