import React, { useState, useContext } from 'react';
import Carta from './Carta';
import Horario from './Horario';
import Mapa from './Mapa';
import Opiniones from './Opiniones';
import Carousel from './Carousel/CarouselComponent';
import './DetailBar.scss';
import Menu from '../menu/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import MyContext from '../../context';


const DetailBar = () => {

    // ------CONTEXTO------
    const valueFromContext = useContext(MyContext);
    const state = valueFromContext.hooksState
    const setStateContext = valueFromContext.setHooksState;
    

    //Iconos de Fontawesome
    const chevron = <FontAwesomeIcon icon={faChevronLeft} color='#FF030B' size="lg" />
    const heart = <FontAwesomeIcon icon={faHeart} color='#707070' size="lg" />
    const fillHeart = <FontAwesomeIcon icon={faHeart} color='#FF030B' size="lg" />

    const [favSelect, setFavSelect] = useState(false);

    const [itemSelected, setItemSelected] = useState('horario');

    const showMenuItem = (menuItem) => {
        switch (menuItem) {
            case 'horario':
                return (<Horario />)
            case 'carta':
                return <Carta />
            case 'mapa':
                return <Mapa />
            case 'opiniones':
                return <Opiniones />
        }
    }

    return (
        <div className='DetailBar'>
            <Menu/>
            <div className="row cabeceraBar">
                
                    <div className="col-2 iconChevron"><Link to='/Home'>
                        {chevron}</Link>
                    </div>
                
                <div className="col-8 divTitulo">
                    <h3 className="titulo">
                        {
                            (state.bares[state.selectedBar] || {}).name
                        }
                    </h3>
                </div>
                <div className="col-2 icon" onClick={() => setFavSelect(!favSelect)}>
                    {favSelect ? fillHeart : heart}
                </div>
            </div>
            <div className="row">
                <Carousel />
            </div>
            <div className="row menuOptions">
                <div onClick={() => setItemSelected('horario')}>
                    <p>Horario</p>
                </div>
                <div onClick={() => setItemSelected('carta')}>
                    <p>Carta</p>
                </div>
                <div onClick={() => setItemSelected('mapa')}>
                    <p>Mapa</p>
                </div>
                <div onClick={() => setItemSelected('opiniones')}>
                    <p>Opiniones</p>
                </div>
            </div>
            <div>
                {showMenuItem(itemSelected)}
            </div>
        </div>
    )
}

export default DetailBar;