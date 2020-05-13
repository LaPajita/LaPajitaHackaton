import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import './SimpleMap.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMapPin } from '@fortawesome/free-solid-svg-icons';
import MyContext from '../../context';


const SimpleMap = () => {

  // ------CONTEXTO------
  const valueFromContext = useContext(MyContext);
  const state = valueFromContext.hooksState

  //Iconos de Fontawesome + estilo dependiendo de waitingState 
  const markercolor = (bar, index) => {
    if (bar.waiting_list == 0) {
     if(state.selectedBar === index){
       return <FontAwesomeIcon icon={faMapPin} color='#FF030B' size={"6x"} />
     } else{
       return <FontAwesomeIcon icon={faMapMarkerAlt} color='#FF030B90' size={"4x"} />
     }
    } else {
      if (state.selectedBar === index) {
        return <FontAwesomeIcon icon={faMapPin} color='#43A415' size={"6x"} />
      } else {
        return <FontAwesomeIcon icon={faMapMarkerAlt} color='#43A41590' size={"4x"} />
      }
    }
  }

  // Cada marker
  const AnyReactComponent = ({ icon }) => <div className='markerStyle'>
    {icon}
  </div>;

  const defaultProps = {
    center: {
      lat: 41.3865467,
      lng: 2.1327177
    },
    zoom: 13
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBpaMr8YKimHcPcOEincF0iJXc7yc9zLxY' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {
          state.bares && state.bares.map((bar, index) =>
            <AnyReactComponent
              lat={bar.latitude}
              lng={bar.longitude}
              icon={markercolor(bar, index)}
              text= {index}
            />
          )}
      </GoogleMapReact>
    </div>
  );

}

export default SimpleMap;