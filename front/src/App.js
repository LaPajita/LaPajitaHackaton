import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
import MyContext from "./context";
import "./App.css";
import Menu from './componentes/menu/Menu';
import CarouselComponent from './componentes/DetailBar/Carousel/CarouselComponent';
import LogIn from './componentes/login/LogIn';
import DetailBar from './componentes/DetailBar/DetailBar';
// import Side from './componentes/menu/Side';

function App() {
  const [hooksState, setHooksState] = useState({});
  //Para poder exportar el estado
  const stateAndFunction = { hooksState, setHooksState };

  return (
    <MyContext.Provider value={stateAndFunction}>
      <div className="App">
        <Menu />
        {/* <Side /> */}
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/LogIn" exact component={LogIn} />
          <Route path='/barDetail' component={DetailBar}/>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
