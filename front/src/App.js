import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
import MyContext from "./context";
import "./App.css";
import Menu from './componentes/menu/Menu';
<<<<<<< HEAD
import CarouselComponent from './componentes/Carousel/CarouselComponent';
=======
// import CarouselComponent from './componentes/DetailBar/Carousel/CarouselComponent';
import Registration from './componentes/Registration/Registration';
// import CarouselComponent from './componentes/Carousel/CarouselComponent';
import LogIn from './componentes/login/LogIn';
import DetailBar from './componentes/DetailBar/DetailBar';
>>>>>>> f3f40acd54adcd9c923ecff218887cd067def107
// import Side from './componentes/menu/Side';




function App() {
  const [hooksState, setHooksState] = useState({});
  //Para poder exportar el estado
  const stateAndFunction = { hooksState, setHooksState };

  return (
    <MyContext.Provider value={stateAndFunction}>
      <div className="App">
<<<<<<< HEAD
        <Menu />
     
        {/* <Side /> */}
        <Router>
          <Route path="/" exact component={Home} />
          {/* <Route path="/LogIn" exact component={LogIn} /> */}
          <Route path='/barDetail' component={CarouselComponent}/>
=======
       {/* <CarouselComponent />  */}
        {/* <Side /> */}
        <Menu />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/LogIn" exact component={LogIn} />
          <Route path='/barDetail' component={DetailBar}/>
          <Route path="/Registration" exact component={Registration} />
          {/* <Route path='/barDetail' component={CarouselComponent}/> */}

>>>>>>> f3f40acd54adcd9c923ecff218887cd067def107
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
