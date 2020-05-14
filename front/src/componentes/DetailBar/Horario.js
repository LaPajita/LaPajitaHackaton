<<<<<<< HEAD
  
=======
>>>>>>> 0283baf75ce689cbeeb8f02d13dd921c54310711
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

// import React from "react";
// import "./Horario.css";

// const Horario = () => {
//   // return <p>Horario</p>;

//   return (
//     <React.Fragment>
//       <div className="lista-espera">
//         <div className="container-fluid_lista">
//           <div className="row">
//               <div className="col-12">
//             <h4>Lista de espera disponible</h4>
//             </div>
//           </div>

//           <div className="row personas">
//               <div className="col-12">
//             <p>3 personas en lista</p>
//             </div>
//           </div>

//           <div className="row tiempo">
//               <div className="col-12">
//                 <p>Espera aproximada: 30 mins</p>
//               </div>
//           </div>

//           <div className="row miBoton2">
//             <div className="col-12">
//                 <button onClick className="miBoton">
//                 APUNTARME
//                 </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="Horario">
//         <div className="container-fluid">
        
//             <div className="row">
//               <div className="col-4 dia">Lunes</div>
//               <div className="col-8 hora">6:00 P.M - 1:00 A.M</div>
//               <hr></hr>
//             </div>
          

//           <div className="row">
//             <div className="col-4 dia">Martes</div>
//             <div className="col-8 hora">6:00 P.M - 1:00 A.M</div>
//             <hr></hr>
//           </div>

//           <div className="row">
//             <div className="col-4 dia">Miércoles</div>
//             <div className="col-8 hora">6:00 P.M - 1:00 A.M</div>
//             <hr></hr>
//           </div>

//           <div className="row">
//             <div className="col-4 dia">Jueves</div>
//             <div className="col-8 hora">6:00 P.M - 1:00 A.M</div>
//             <hr></hr>
//           </div>

//           <div className="row">
//             <div className="col-4 dia">Viernes</div>
//             <div className="col-8 hora">6:00 P.M - 1:00 A.M</div>
//             <hr></hr>
//           </div>

//           <div className="row">
//             <div className="col-4 dia">Sábado</div>
//             <div className="col-8 hora">6:00 P.M - 1:00 A.M</div>
//             <hr></hr>
//           </div>

//           <div className="row">
//             <div className="col-4 dia">Domingo</div>
//             <div className="col-8 hora">Cerrado</div>
//             <hr></hr>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Horario;
