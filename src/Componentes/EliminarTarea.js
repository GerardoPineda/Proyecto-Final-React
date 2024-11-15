import React from "react";

export const EliminarTarea = () => {
  const eliminarElemento = () => {
    // Eliminar el elemento con la clave "miElemento"
    localStorage.removeItem("nombres");
    console.log("Elemento eliminado de localStorage.");
  };

  return (
    <div>
      <h1>Eliminar todas las tareas</h1>
      <button onClick={eliminarElemento} class="btn btn-danger mb-3">
        Confirma que desea eliminar todas las actividade
      </button>
    </div>
  );
};


