import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser} from '@fortawesome/free-solid-svg-icons';


const Horario=()=>{
    return(
        <Fragment>
            <article className='timecard'>
                <div className='titulo-lista'>
                Lista de espera disponible
                </div>
                <div className='detalle'>
                <FontAwesomeIcon icon={faUser} />3 personas en lista
                </div>
                <div className='detalle'>
                <FontAwesomeIcon icon={faClock} />Espera aproximada:  30 mins
                </div>
                <div className='apuntarme'>
                <button>
                    APUNTARME
                </button>
                </div>
            </article>
            <article className='weekcard'>
                <div >

                </div>

            </article>
            <p>Horario</p>
        </Fragment>
        
    )
}

export default Horario;