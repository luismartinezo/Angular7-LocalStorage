import { Injectable } from '@angular/core';
import { Tarea } from '../Models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  tareas: Tarea[];
  constructor() { }

  getTareas() {
    if(localStorage.getItem('tareas') === null) {
      this.tareas = [];
    } else {
      this.tareas = JSON.parse(localStorage.getItem('tareas'));
    }
    return this.tareas;
  }
  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    let tareas = [];
    if (localStorage.getItem('tareas') === null) {
      tareas = [];
      tareas.push(tarea);
      localStorage.setItem('tareas', JSON.stringify(tareas));
    } else {
      tareas = JSON.parse(localStorage.getItem('tareas'));
      tareas.push(tarea);
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }
  }

  borrarTarea(tarea: Tarea) {
    for (let i = 0; i < this.tareas.length; i++) {
      if (tarea === this.tareas[i]) {
        this.tareas.splice(i, 1);
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
      }
    }
  }
}
