import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
import LogIn from './componentes/login/LogIn';
import MyContext from "./context";
import "./App.css";
import Menu from './componentes/menu/Menu';
import Registration from './componentes/Registration/Registration';
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
          <Route path="/Registration" exact component={Registration} />
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
