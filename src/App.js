import React, { useEffect } from 'react';
import './App.css';
import Tarea from './Tarea';
import { BaseDeDatos } from './BaseDeDatos';
import { uuid } from './utils';

function App() {
  const [tarea, setTarea] = React.useState('');
  const [tareas, setTareas] = React.useState([]);

  useEffect(() => {
    setTareas(BaseDeDatos.obtenerTareas());
  }, [])

  const agregar = (e) => {
    e.preventDefault();
    if (!tarea) return;
    setTareas([
      ...tareas,
      { texto: tarea, creado: Date.now(), completado: false, id: uuid() }
    ]);
    setTarea('');
  }

  const marcarCompletado = (e, id) => {
    e.preventDefault();
    setTareas(tareas.map((t, i) => {
      if (t.id === id) t.completado = !t.completado;
      return t;
    }))
  }

  const borrar = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setTareas(tareas.filter((t, i) => t.id !== id));
  }

  const changeTarea = (e) => {
    setTarea(e.target.value);
  }

  useEffect(() => {
    BaseDeDatos.guardarTareas(tareas)
  }, [tareas])
  return (
    <div className="App">
      <div className="header">
        <div className="left-date"></div>
        <h1>Hoy</h1>
        <div className="right-date"></div>
      </div>
      <form onSubmit={agregar}>
        <div className="agregar-nuevo">
          <input placeholder="Nueva tarea" value={tarea} onChange={changeTarea} />
          <button type="submit" className="agregar-btn" onClick={agregar}>➕</button>
        </div>
      </form>
      <div className="lista-tareas">
        <ol>
          {tareas.map((t, i) => <Tarea key={t.id} marcarCompletado={marcarCompletado} tarea={t} indice={i} borrar={borrar} />)}
        </ol>
      </div>
    </div >
  );
}

export default App;
