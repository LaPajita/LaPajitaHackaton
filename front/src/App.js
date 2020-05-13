import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
import MyContext from "./context";
import "./App.css";
import Menu from './componentes/menu/Menu';
<<<<<<< HEAD
import Registration from './componentes/Registration/Registration';
=======
import CarouselComponent from './componentes/Carousel/CarouselComponent';
<<<<<<< HEAD
=======
import LogIn from './componentes/login/LogIn';
>>>>>>> 4c7a44323acd0fb375e8453112e3b7cedbaa1b93
>>>>>>> 87f6f4c75bbff80fc9829c39ef31008d5b32456a
// import Side from './componentes/menu/Side';

function App() {
  const [hooksState, setHooksState] = useState({});
  //Para poder exportar el estado
  const stateAndFunction = { hooksState, setHooksState };

  return (
    <MyContext.Provider value={stateAndFunction}>
      <div className="App">
<<<<<<< HEAD
        {/* <Menu /> */}
        <CarouselComponent />
        {/* <Side /> */}
        
        {/* <Router>
          <Route path="/" exact component={Home} />
          <Route path="/LogIn" exact component={LogIn} />
        </Router> */}
=======
        <Menu />
        {/* <Side /> */}
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/LogIn" exact component={LogIn} />
<<<<<<< HEAD
          <Route path="/Registration" exact component={Registration} />
=======
          <Route path='/barDetail' component={CarouselComponent}/>
>>>>>>> 87f6f4c75bbff80fc9829c39ef31008d5b32456a
        </Router>
>>>>>>> 4c7a44323acd0fb375e8453112e3b7cedbaa1b93
      </div>
    </MyContext.Provider>
  );
}

export default App;
