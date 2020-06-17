import React from 'react';

const Tarea = (props) => {
    const { tarea, marcarCompletado, indice, borrar } = props;
    return (
        <li onClick={(e) => marcarCompletado(e, tarea.id)}>
            <div className="tarea">
                <div className="indice">{indice + 1}. </div>
                <div className={["contenido", tarea.completado ? 'completado' : ''].join(' ')}>{tarea.texto}</div>
                <div className="borrar" onClick={(e) => borrar(e, tarea.id)} >🗑️</div>
            </div>
        </li>
    )
}

export default Tarea;