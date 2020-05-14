import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
import MyContext from "./context";
import "./App.scss";
import Menu from './componentes/menu/Menu';
import CarouselComponent from './componentes/DetailBar/Carousel/CarouselComponent';
import Registration from './componentes/Registration/Registration';
import LogIn from './componentes/login/LogIn';
import DetailBar from './componentes/DetailBar/DetailBar';
import Opiniones from './componentes/DetailBar/Opiniones';
import Horario from './componentes/DetailBar/Horario';
import Mapa from './componentes/DetailBar/Mapa';

function App() {
  const [hooksState, setHooksState] = useState({});
  const [loading, setLoading] = useState(true);

  // La primera vez que se renderiza hacemos la llamada a la api para meter los datos en el contexto
  useEffect(() => {
    fetch('https://thelittlestraw.herokuapp.com/places')
      .then((response) => {
        return response.json()
      })
      .then((dataJson) => {
        setHooksState({
          bares: dataJson,
          usuario: '',
          selectedBar: '',
          id_place: ''
        })
        setLoading(false);
      })
  }, [])

  //Para poder exportar el estado
  const stateAndFunction = { hooksState, setHooksState };

  return (
    <MyContext.Provider value={stateAndFunction}>
      <div className="App">
        {
          loading ?
             <div className='ripplerer'><div><div className="lds-ripple"><div></div><div></div></div></div></div>
            :
            <>
              <Router>
              <Route path="/Home" exact component={Home} />
              <Route path="/" exact component={LogIn} />
              <Route path='/barDetail' component={DetailBar}/>
              <Route path="/registro" exact component={ Registration } />
              {/* <Route path='/barDetail' component={CarouselComponent}/> */}
              <Route path="/opiniones" exact component={ Opiniones } />
              <Route path="/horario" exact component={ Horario } />
              <Route path="/mapa" exact component={ Mapa } />

              </Router>
            </>
        }
      </div>
    </MyContext.Provider>
  );
}

export default App;

