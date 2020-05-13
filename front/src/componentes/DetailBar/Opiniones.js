import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCocktail } from '@fortawesome/free-solid-svg-icons';


const Opiniones=()=>{
    return(
        <Fragment>
            <article>
                <button>
                    DEJA TU COMENTARIO
                </button>
            </article>
            <article className='opiniones-card'>
                <div className='avatar'>
                <FontAwesomeIcon icon={faUserCircle}/>
                </div>
                <div className='user-name'>
                    Pepa
                </div>
                <div className='rate'>
                <FontAwesomeIcon icon={faCocktail}/>
                </div>
                <div className='comment'>
                    <p><i>Todo estaba buenísimo, bien de precio. Apenas esperamos...pienso repetir</i></p>
                </div>
            </article>

            
            

        </Fragment>
        
    )
}

export default Opiniones;