import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { TareaComponent } from './Components/tarea/tarea.component';
import { TareaListComponent } from './Components/tarea-list/tarea-list.component';
import { TareaFormComponent } from './Components/tarea-form/tarea-form.component';
import { TareaService } from './Services/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    TareaComponent,
    TareaListComponent,
    TareaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
