import React from 'react';
import OpinionesClassPlantilla from './OpinionesClassPlantilla';

const Opiniones = () =>{
  return(
    <>
    <OpinionesClassPlantilla img='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' name='Javi Fernandez' rating='3' opinion='Todo genial pienso volver'/>
    <OpinionesClassPlantilla img='https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' name='Oscar Garrido' rating='4.8' opinion='Se ha convertido en uno de mis sitios favoritos. La lista de espera es genial!'/>
    <OpinionesClassPlantilla img='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80' name='Clara Garcia' rating='4' opinion='Gracias a la app me pude organizar la noche sin esperas'/>
    </>
  )
}

export default Opiniones;