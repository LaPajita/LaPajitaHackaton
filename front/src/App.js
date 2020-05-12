import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Componentes/Home';
import MyContext from "./context";
import "./App.css";

function App() {
  const [hooksState, setHooksState] = useState({});
  //Para poder exportar el estado
  const stateAndFunction = { hooksState, setHooksState };

  return (
    <MyContext.Provider value={stateAndFunction}>
      <div className="App">
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
