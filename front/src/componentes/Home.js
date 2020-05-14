import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import SimpleMap from './Map/SimpleMap';
import MyContext from '../context';
import Menu from './menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCocktail, faMapMarkedAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

function Home() {

    // ------CONTEXTO------
    const valueFromContext = useContext(MyContext);
    const state = valueFromContext.hooksState
    const setStateContext = valueFromContext.setHooksState;
    const imagenesSeparadas = state.bares.map(bar => bar.photos.split(','));


    //Iconos de Fontawesome
    const heart = <FontAwesomeIcon icon={faHeart} color='#707070' size="lg" />
    const fillHeart = <FontAwesomeIcon icon={faHeart} color='#FF030B' size="lg" />
    const cocktail = <FontAwesomeIcon icon={faCocktail} color='#707070' size="lg" />
    const cocktailFill = <FontAwesomeIcon icon={faCocktail} color='#FF030B' size="lg" />
    const mapDirection = <FontAwesomeIcon icon={faMapMarkedAlt} color='#FF030B' size="lg" />
    const phone = <FontAwesomeIcon icon={faPhone} color='#FF030B' size="lg" />
    const clock = <FontAwesomeIcon icon={faClock} color='#FF030B' size="lg" />

    //Imagen de bar...prueba hasta que tengamos el json
    const img = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'

    //---------------------------ESTADOS-------------------------
    //Score ....ira de 1/5
    const score = [1, 2, 3, 4, 5];
    //Estado favorito
    const [favSelect, setFavSelect] = useState(false);

    //---------------------------FIN ESTADOS-------------------------
    const waitingStyle = (param) => {
        switch (param) {
            case 0:
                return { backgroundColor: "#FFC8A860" };
            default:
                return { backgroundColor: "#43A41560" };
        }
    }
    
    return (
        <div className="Home">
            < Menu />
            <div className="container-fluid">
                <div className="row mapa">
                    <SimpleMap />
                </div>
                {state.bares && state.bares.map((bar, index) =>
                    < div className = "row cards"
                    onClick = {
                        () => setStateContext({
                            ...state,
                            selectedBar: index,
                            id_place: bar.id
                        })
                    } >
                        <div className="col-12 col-sm-4 foto" style={{ backgroundImage: `url(${imagenesSeparadas[index][0]})` }}>
                        </div>
                        <div className="col-12 col-sm-8 cards_info">
                            <div className="row title_icon">
                                <div className="col-10">
                                    <h3 className="titulo">{bar.name}</h3>
                                </div>
                                <div className="col-2 icon" onClick={() => setFavSelect(!favSelect)}>
                                    {favSelect ? fillHeart : heart}
                                </div>
                            </div>
                            <div className="row puntuation">
                                <div className="col-8 score">
                                    {
                                        score.map((number, index) => <div key={index} >
                                            {index + 1 <= Math.floor(bar.rating) ? cocktailFill : cocktail}
                                        </div>)
                                    }
                                </div>
                                <div className="col-4 ">
                                    <p className="scoreText">{`${bar.rating}/5`}</p>
                                </div>
                            </div>
                            <div className="row adress">
                                <p><span>{mapDirection}</span>{bar.formatted_address}</p>
                            </div>
                            <div className="row telephone">
                                <p><span>{phone}</span>558 447 236</p>
                            </div>
                            <div className="row waiting_state" style={waitingStyle(bar.waiting_list)}>
                                <p><span>{clock}</span>{bar.waiting_list === 0 ? 'Lista de espera inactiva' : 'Lista de espera activa'}</p>
                            </div>
                            <Link to='/barDetail'>
                                <div className="row detail_button">
                                    <p>VER DETALLE</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;