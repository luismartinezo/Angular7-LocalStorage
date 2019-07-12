import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/Services/tarea.service';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  titulo: string;
  descripcion: string;
  constructor(private tareaService: TareaService) { }

  ngOnInit() {
  }
  agregarTarea(newTitle: HTMLInputElement, newDescription: HTMLInputElement) {
    this.tareaService.agregarTarea({
      titulo: newTitle.value,
      descripcion: newDescription.value,
      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    return false;
  }

}
