import React, { useState } from 'react';
import Carta from './Carta';
import Horario from './Horario';
import Mapa from './Mapa';
import Opiniones from './Opiniones';
import Carousel from './Carousel/CarouselComponent';
import './DetailBar.scss'

const DetailBar = () => {

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