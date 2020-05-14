import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import './OpinionesClassPlantilla.scss'

function OpinionesClassPlantilla(props) {

    const cocktail = <FontAwesomeIcon icon={faCocktail} color='#707070' size="lg" />
    const cocktailFill = <FontAwesomeIcon icon={faCocktail} color='#FF030B' size="lg" />

    //Score ....ira de 1/5
    const score = [1, 2, 3, 4, 5];

    return (
        <div className="row boxCard">
            <div className="col-12 col-md-4 justifyCenter alignCenter">
                <div className="imgCard" style={{ backgroundImage: `url("${props.img}")` }}>
                </div>
            </div>
            <div className="col-12 col-md-8 textStyle">
                <div className="row name">
                    <p>{props.name}</p>
                </div>
                <div className="row alignCenter">
                        {
                            score.map((number, index) => <div key={index} >
                                {index + 1 <= Math.floor(props.rating) ? cocktailFill : cocktail}
                            </div>)
                        }
                   
                        <p className="rating">{`${props.rating} / 5`}</p>
                </div>
                <div className="row">
                    <p>{`"${props.opinion}"`}</p>
                </div>
            </div>
        </div>
    )
}

export default OpinionesClassPlantilla;