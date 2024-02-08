import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        markers: [ ...this.props.markers ],
        classes: this.props.classes || "",
        zoom: this.props.zoom || 15,
        style: {
          ...this.props.style
        },
        containerStyle: {
          ...this.props.containerStyle
        },      
        geolocation: {
          lat: this.props.geolocation.lat || 0,
          lng: this.props.geolocation.lng || 0,
        }
      };
    }
  
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={this.state.zoom}
          style={this.state.style}
          containerStyle={this.state.containerStyle}
          initialCenter={this.state.geolocation}
          className={this.state.classes}
          disableDefaultUI={true}
        >
          {
            this.state.markers.map((marker, index) => (
              <Marker
                key={`marker_${index}`}
                position={{ lat: marker.lat, lng: marker.lng }}
              />
            ))
          }        
        </Map>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyB2cI2xl2b40J1NNg4EZ2VXuD2JTBJ2GTg',
  })(MapContainer);