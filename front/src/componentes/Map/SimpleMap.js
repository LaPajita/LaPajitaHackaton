import React, { Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './SimpleMap.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// ATENCION TRAER DEL CONTECTO
const waitingState = false;

//Iconos de Fontawesome + estilo dependiendo de waitingState
const markercolor=()=>{
  if(waitingState == false){
    return 'red'
  }else{
    return 'green'
  }
}
const marker = <FontAwesomeIcon icon={faMapMarkerAlt} color={markercolor()} size="4x" /> 

// Cada marker
const AnyReactComponent = ({ icon }) => <div className='markerStyle'>
  {icon}
  </div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.3865467,
      lng: 2.1327177
    },
    zoom: 13
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBpaMr8YKimHcPcOEincF0iJXc7yc9zLxY'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={41.3865467}
            lng={2.1327177}
            icon={marker}
          />
          <AnyReactComponent
            lat={41.396101}
            lng={2.145365}
            icon={marker}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;