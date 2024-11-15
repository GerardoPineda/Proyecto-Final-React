import React, { useEffect, useState } from 'react';

export const Inicio = () =>{
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
            <h1>Listado de tareas guardadas</h1>
            
            <br></br>
            
            <ul class="list-group">
                {listaNombres.map((nombre, index) =>(
                    <li  class="list-group-item" key={index}>{nombre}</li>
                ))}
            </ul>
        </div>
    );
};