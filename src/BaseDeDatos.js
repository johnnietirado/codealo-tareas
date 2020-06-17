const BaseDeDatos = {
    guardarTareas(tareas) {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    },
    obtenerTareas() {
        const tareas = localStorage.getItem('tareas');
        if (!tareas) return [];
        return JSON.parse(tareas);
    }
}

export { BaseDeDatos };