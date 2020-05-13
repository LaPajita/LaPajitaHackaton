import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Opiniones.scss';



const Opiniones = () => { 

    
  return (
    <Fragment className='Opiniones'>
      <div className='container-opiniones'>
        <article>
          <button className='comment-button'>
            DEJAR COMENTARIO
          </button>
        </article>
        <article className='opiniones-card'>
          <img className='avatar' 
              src='https://image.flaticon.com/icons/svg/194/194938.svg' />
          <div className='card-body'>
            <div className='user-name'>
              <h3>Nombre usuario</h3>
              <div className='rate'>
                copitasssss
        </div>
            </div>
            <div className='comment'>
              <p><i>Todo estaba buenísimo, bien de precio. Apenas esperamos...pienso repetir</i></p>
            </div>
          </div>
        </article>
      </div>

    </Fragment>

  )

}
export default Opiniones;