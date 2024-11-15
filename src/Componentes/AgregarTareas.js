import React, { useEffect, useState } from 'react';

export const AgregarTareas = () =>{
    const [nombre, setNombre] = useState("");
    const [listaNombres, setListaNombres] = useState([]);

    useEffect(() =>{
        const nombresGuardados = localStorage.getItem('nombres');
        if(nombresGuardados){
            setListaNombres(JSON.parse(nombresGuardados));
        }
    }, []);
  
    const handleChange =(e) =>{
        setNombre(e.target.value);
    }

    const guardarNombre =() =>{
       if(nombre.trim()==="")return;

       const nuevaListas = [...listaNombres, nombre];
       setListaNombres(nuevaListas);
       localStorage.setItem("nombres", JSON.stringify(nuevaListas));
       setNombre("");

    };

    return (
        <div>
            <h1 >Agregue una nueva Tarea</h1>
            <input type='text' value={nombre} onChange={handleChange} placeholder='Ingrese tarea!!!'/>
            <br></br>
            <br></br>
            <button onClick={guardarNombre} class="btn btn-success">Guardar</button>
            <br></br>
           
           
        </div>
    );
};