import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './componentes/Home';
import MyContext from "./context";
import "./App.css";
import Menu from './componentes/menu/Menu';
import Registration from './componentes/Registration/Registration';
import LogIn from './componentes/login/LogIn';
import DetailBar from './componentes/DetailBar/DetailBar';
// import Side from './componentes/menu/Side';

function App() {
  const [hooksState, setHooksState] = useState({});
  
  const [loading, setLoading] = useState(true);

  //La primera vez que se renderiza hacemos la llamada a la api para meter los datos en el contexto
  useEffect(() => {
    fetch('https://thelittlestraw.herokuapp.com/places')
      .then((response) => {
        return response.json()
      })
      .then((dataJson) => {
        setHooksState({
          bares: dataJson,
          usuario: '',
          selectedBar: ''
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
            <p>loading...</p>
            :
            <>
              <Menu />
              <Router>
                <Route path="/" exact component={Home} />
                <Route path="/LogIn" exact component={LogIn} />
                <Route path='/barDetail' component={DetailBar} />
                <Route path="/Registration" exact component={Registration} />
              </Router>
            </>
        }
        {/* <Side /> */}

      </div>
    </MyContext.Provider>
  );
}

export default App;
