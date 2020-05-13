import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
import MyContext from "./context";
import "./App.css";
import Menu from './componentes/menu/Menu';
// import CarouselComponent from './componentes/DetailBar/Carousel/CarouselComponent';
import Registration from './componentes/Registration/Registration';
// import CarouselComponent from './componentes/Carousel/CarouselComponent';
import LogIn from './componentes/login/LogIn';
import DetailBar from './componentes/DetailBar/DetailBar';
import Opiniones from './componentes/DetailBar/Opiniones';
import Horario from './componentes/DetailBar/Horario';
import Mapa from './componentes/DetailBar/Mapa';




function App() {
  const [hooksState, setHooksState] = useState({});
  //Para poder exportar el estado
  const stateAndFunction = { hooksState, setHooksState };

  return (
    <MyContext.Provider value={stateAndFunction}>
      <div className="App">
       {/* <CarouselComponent />  */}
        {/* <Side /> */}
        <Menu />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/LogIn" exact component={LogIn} />
          <Route path='/barDetail' component={DetailBar}/>
          <Route path="/registro" exact component={ Registration } />
          {/* <Route path='/barDetail' component={CarouselComponent}/> */}
          <Route path="/opiniones" exact component={ Opiniones } />
          <Route path="/horario" exact component={ Horario } />
          <Route path="/mapa" exact component={ Mapa } />

        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
