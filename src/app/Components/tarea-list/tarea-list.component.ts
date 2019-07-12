import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/Models/tarea';
import { TareaService } from 'src/app/Services/tarea.service';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {

  tareas: Tarea[];
  constructor(private tareaService: TareaService ) { }

  ngOnInit() {
    this.tareas = this.tareaService.getTareas();
  }

  agregarTarea(tarea: Tarea) {
    console.log(tarea);
    this.tareaService.agregarTarea(tarea);
  }
}
