import React, { useEffect, useState } from 'react';

export const ListarTareas = () =>{
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
            <h1>Listado de todas las actividad</h1>
            
            <br></br>
            <h2>Nombre de actividad</h2>
            <ul>
                {listaNombres.map((nombre, index) =>(
                    <li key={index}>{nombre}</li>
                ))}
            </ul>
        </div>
    );
};