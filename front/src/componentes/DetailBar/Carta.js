import React from 'react';
import './Carta.scss'; 

const Carta=()=>{
    return(

        <div className="cartaPage">
            <div class="container-fluid">
            <div className="row no gutters">
                        <div className="col-2 col-sm-4 col-md-4 p-3">
                        <div className="priceText p-3">
                           </div> 
                    </div>
                    <div className="col-8 col-sm-4 col-md-4">
                        <div className="priceText p-2">
                           </div> 
                    </div>
                    <div className="col-2 col-sm-4 col-md-4">
                        <div className="priceText p-2">
                           <h2>Precios</h2>
                           </div> 
                    </div>
                    </div>
                    <div className="row no gutters">
                        <div className="col-2 col-sm-4 col-md-4 p-3 imageContainer">
                            <img className="martini" src={'https://s6.gifyu.com/images/martini.png'} alt="Martini" />
                    </div>
                    <div className="col-8 col-sm-4 col-md-4">
                    <div className="card-body p-2 text-dark">
                        <h4 className="card-title">Martini</h4>
                        <p className="card-text">
                        El martini hecho con una combinación de ginebra o vodka y vermut. Para darle un toque elegante se adorna con aceitunas.
                        </p> 
                        </div>
                        </div>
                        <div className="col-2 col-sm-4 col-md-4">
                    <div className="card-body p-2 priceValue">
                        <p className="card-text ">
                        12€
                        </p>
                        </div>
                        </div>
                    </div>

            <hr/>

         <div className="cartaPage">
            <div class="container-fluid">
                    <div className="row no gutters">
                        <div className="col-2 col-sm-4 col-md-4 p-3 imageContainer">
                            <img className="martini" src={'https://s6.gifyu.com/images/tequilla-sunrise.png'} alt="Tequila Sunrise" />
                    </div>
                    <div className="col-8 col-sm-4 col-md-4">
                    <div className="card-body p-1 text-dark">
                        <h4 className="card-title">Tequila Sunrise</h4>
                        <p className="card-text">
                        El Tequila Sunrise es un cóctel combinado con tequila sin mezclar, jugo de naranja y jarabe de granadina.
                        </p>
                        </div>
                        </div>
                        <div className="col-2 col-sm-4 col-md-4">
                    <div className="card-body p-1 priceValue">
                        <p className="card-text">
                        14€
                        </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <hr/>


        <div className="cartaPage">
            <div class="container-fluid">
                    <div className="row no gutters">
                        <div className="col-2 col-sm-4 col-md-4 p-3 imageContainer">
                            <img className="martini" src={'https://s6.gifyu.com/images/Margarita.png'} alt="Margarita" />
                    </div>
                    <div className="col-8 col-sm-4 col-md-4">
                    <div className="card-body p-1 text-dark">
                        <h4 className="card-title">Margarita</h4>
                        <p className="card-text">
                        La margarita es un cóctel mezclado con tequila, triple sec y jugo de lima o limón. Para condimentar las cosas, el borde del vaso está revestido de sal.
                        </p>
                        </div>
                        </div>
                        <div className="col-2 col-sm-4 col-md-4">
                    <div className="card-body p-1 priceValue">
                        <p className="card-text ">
                        15€
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        

  
    );
};

export default Carta; 