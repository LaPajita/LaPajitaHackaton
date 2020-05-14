import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SimpleMap from'../Map/SimpleMap';

const Mapa = () => { 
    return(
        <div className="row" style={{height:'80vh'}}>
           <SimpleMap/> 
        </div>
    )
}

export default Mapa;