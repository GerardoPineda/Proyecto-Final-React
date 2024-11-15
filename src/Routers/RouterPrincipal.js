import React from 'react';
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import {Inicio} from "../Componentes/Inicio";
import {AgregarTareas} from "../Componentes/AgregarTareas";
import {ListarTareas} from "../Componentes/ListarTareas";
import {EliminarTarea} from "../Componentes/EliminarTarea";



export const RouterPrincipal =() =>{
    return(
        <BrowserRouter>
        <h1>APLICACION DE MANEJO DE TAREAS</h1>
        <hr></hr>

        <nav >
            <div>
            <ul class="list-group list-group-horizontal" >
                <li class="list-group-item">
                    <NavLink  to="/">Inicio</NavLink>
                </li>
                <li class="list-group-item">
                    <NavLink to="/AgregarTareas">Agregar Tareas</NavLink>
                </li>
                <li class="list-group-item">
                    <NavLink  to="/ListarTareas">Listar Tareas</NavLink>
                </li>
                <li class="list-group-item">
                    <NavLink  to="/EliminarTarea">Eliminar Tareas</NavLink>
                </li>
                
            </ul>
            </div>
            
           
            
        </nav>

        <hr>
        </hr>
        <section>
            <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='/AgregarTareas' element={<AgregarTareas></AgregarTareas>}></Route>
                <Route path='/ListarTareas' element={<ListarTareas></ListarTareas>}></Route>
                <Route path='/EliminarTarea' element={<EliminarTarea></EliminarTarea>}></Route>
            </Routes>
            
        </section>
        <footer>
            
        </footer>
        </BrowserRouter>
    )
}
