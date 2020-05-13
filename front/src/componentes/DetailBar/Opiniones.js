import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faCocktail } from '@fortawesome/free-solid-svg-icons';
import './Opiniones.scss';


const Opiniones = () => {
    return(
        <div className='Opiniones'>
            <article className='comment-button'>
                <button>
                    DEJA TU COMENTARIO
                </button>
            </article>
            {/* <div className='container-opiniones'>
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

            </div>
            

            
             */}
            <div class='container-opiniones'>
  <article class='opiniones-card'>
    <img class='avatar' src='https://image.flaticon.com/icons/svg/194/194938.svg'/>
    <div class='card-body'>
      <div class='user-name'>
        <h3>Nombre usuario</h3>
        <div class='rate'>
          copitasssss
        </div>
      </div>
      <div className='comment'>
        <p><i>Todo estaba buenísimo, bien de precio. Apenas esperamos...pienso repetir</i></p>
        </div>
    </div>
  </article>
</div>
        </div>
        
    )
}

export default Opiniones;