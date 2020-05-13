import React from "react";
import "./Horario.scss";

const Horario = () => {

  return (
    <React.Fragment>
      <div>
        <div className="lista">
          <div className="row justifyCenter">
            <h4>Lista de espera disponible</h4>
          </div>
          <div className="row personas justifyCenter">
            <p>3 personas en lista</p>
          </div>
          <div className="row tiempo justifyCenter">
            <p>Espera aproximada: 30 mins</p>
          </div>
          <div className="row justifyCenter">
            <button onClick className="miBoton">
              Apuntarme
                </button>
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
