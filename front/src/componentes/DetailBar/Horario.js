import React, { useContext, useState, useEffect } from "react";
import "./Horario.scss";
import MyContext from '../../context';

const Horario = () => {

  // ------CONTEXTO------
  const valueFromContext = useContext(MyContext);
  const state = valueFromContext.hooksState
  const setStateContext = valueFromContext.setHooksState;
  const [totalPersons, setTotalpersons] = useState('');
  const [apuntadoLista, setApuntadoLista] = useState(false);

  // POSTEAR PERSONA EN LA LISTA
  const addToList = () => {
    const id_place = state.id_place
    const id_user = (state.usuario[0] || {}).id
    fetch(`https://thelittlestraw.herokuapp.com/${id_place}/waitinglist/${id_user}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        setApuntadoLista(true);
      })
  }

  // SABER CUANTAS PERSONAS HAY EN LISTA DE ESPERA
  useEffect(() => {
    fetch(`https://thelittlestraw.herokuapp.com/${state.id_place}/waitinglist`)
      .then((response) => {
        return response.json()
      })
      .then((dataJson) => {
        setTotalpersons((dataJson[0]|| {}).total_de_clientes || 0)
      })
  }, [apuntadoLista])

  // BORRAR A ALGUIEN DE LA LISTA
  const deleteList = () => {
    const id_place = state.id_place
    const id_user = (state.usuario[0] || {}).id
    fetch(`https://thelittlestraw.herokuapp.com/${id_place}/unsubscribe/${id_user}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((responseJson) => {
        console.log(responseJson)
        setApuntadoLista(false);
      })
  }

  console.log((state.bares[state.selectedBar] || {}).average_spend_time)
  return (
    <React.Fragment>
      <div>
        <div className="lista">
          <div className="row justifyCenter">
            <h4>Lista de espera disponible</h4>
          </div>
          <div className="row personas justifyCenter">
            <p><span>{totalPersons}</span> personas en lista</p>
          </div>
          <div className="row tiempo justifyCenter">
            <p>Tiempo medio de espera: <span>{((state.bares[state.selectedBar] || {}).average_spend_time) || 0}</span> mins</p>
          </div>
          <div className="row justifyCenter">
            {
              apuntadoLista
                ? <>
                    <button onClick={() => deleteList()} className="miBoton">
                      Borrarme de la lista
                    </button>
                  </>
                : <>
                    <button onClick={() => addToList()} className="miBoton">
                      Apuntarme a la lista
                    </button>
                  </>
            }
          </div>
        </div>
      </div>

      <div className="Horario">
        <div className="row justifyCenter">
          <p>Lunes</p>
          <p>6:00 P.M - 1:00 A.M</p>
        </div>
        <div div className="row justifyCenter" >
          <hr></hr>
        </div>

        <div className="row justifyCenter">
          <p>Martes</p>
          <p>6:00 P.M - 1:00 A.M</p>
        </div>
        <div div className="row justifyCenter" >
          <hr></hr>
        </div>

        <div className="row justifyCenter">
          <p>Miércoles</p>
          <p>6:00 P.M - 1:00 A.M</p>
        </div>
        <div div className="row justifyCenter" >
          <hr></hr>
        </div>

        <div className="row justifyCenter">
          <p>Jueves</p>
          <p>6:00 P.M - 1:00 A.M</p>
        </div>
        <div div className="row justifyCenter" >
          <hr></hr>
        </div>

        <div className="row justifyCenter">
          <p>Viernes</p>
          <p>6:00 P.M - 1:00 A.M</p>
        </div>
        <div div className="row justifyCenter" >
          <hr></hr>
        </div>

        <div className="row justifyCenter">
          <p>Sábado</p>
          <p>6:00 P.M - 1:00 A.M</p>
        </div>
        <div div className="row justifyCenter" >
          <hr></hr>
        </div>

        <div className="row justifyCenter">
          <p>Domingo</p>
          <p>Cerrado</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Horario;
