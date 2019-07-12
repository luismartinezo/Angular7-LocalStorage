import { Component, OnInit, Input } from '@angular/core';
import { TareaService } from 'src/app/Services/tarea.service';
import { Tarea } from 'src/app/Models/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea;
  constructor(public tareaService: TareaService) { }

  ngOnInit() {
  }

  borrarTarea(tarea: Tarea) {
    if (confirm('seguro que quiere eliminar esta tarea?')) {
      this.tareaService.borrarTarea(tarea);
    }
  }
}
