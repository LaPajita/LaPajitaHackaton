import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
import MyContext from "./context";
import "./App.css";
import Menu from './componentes/menu/Menu';
import Registration from './componentes/Registration/Registration';
// import CarouselComponent from './componentes/Carousel/CarouselComponent';
import LogIn from './componentes/login/LogIn';
// import Side from './componentes/menu/Side';




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
          <Route path="/Registration" exact component={Registration} />
          {/* <Route path='/barDetail' component={CarouselComponent}/> */}

        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
