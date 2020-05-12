import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
<<<<<<< HEAD
=======
import LogIn from './componentes/login/LogIn';
>>>>>>> 6373bad4389a89522c229232ac3a40ecabd9b2da
import MyContext from "./context";
import "./App.css";
import Menu from './componentes/menu/Menu';

function App() {
  const [hooksState, setHooksState] = useState({});
  //Para poder exportar el estado
  const stateAndFunction = { hooksState, setHooksState };

  return (
    <MyContext.Provider value={stateAndFunction}>
      <div className="App">
        <Menu />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/LogIn" exact component={LogIn} />
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
