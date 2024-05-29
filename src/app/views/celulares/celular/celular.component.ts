import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonDirective, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { CelularModel } from '../models/celular.model';
import { CelularService } from '../services/celular.service';

@Component({
  selector: 'app-celular',
  standalone: true,
  imports: [RowComponent, ColComponent, CardComponent,
            CardHeaderComponent, CardBodyComponent,
            ReactiveFormsModule ,FormsModule, FormDirective,
            FormSelectDirective,FormControlDirective,
             FormLabelDirective, ButtonDirective, NgStyle,
             TextColorDirective,
             TableDirective, TableColorDirective, TableActiveDirective],
  templateUrl: './celular.component.html',
  styleUrl: './celular.component.scss'
})
export class CelularComponent {
  listaCelulares : CelularModel[] = [];
  celularModelo : CelularModel = new CelularModel();
  /**
   *
   */
  constructor(private celularService: CelularService) {
    this.getCelulares();

  }

  getCelulares(){
    this.celularService.getTodosLosCelulares().subscribe({
      next : (respuesta) => {
          console.log(respuesta);
          this.listaCelulares = respuesta;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  guardarCelular(){
    console.log(this.celularModelo);
    if (this.celularModelo._id == '') {
      console.log("guardar", this.celularModelo);
      this.agregarCelular();
    } else {
      console.log("editar", this.celularModelo);
      this.editarCelular();
    }


  }
  agregarCelular(){
    this.celularService.agregarCelular(this.celularModelo).subscribe({
      next : (respuesta) => {
          console.log("Se guardo exitosamente",respuesta);
          this.getCelulares();
          this.celularModelo = new CelularModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  eliminarCelular(celular: CelularModel){
    console.log("item a para eliminar", celular);
    this.celularService.eliminarCelular(celular._id).subscribe({
      next : (respuesta) => {
          console.log("Se elimino exitosamente",respuesta);
          this.getCelulares();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  verCelular(celular: CelularModel){
    this.celularModelo = celular;
  }

  editarCelular(){
    this.celularService.editarCelular(this.celularModelo).subscribe({
      next : (respuesta) => {
          console.log("Se edito exitosamente",respuesta);
          this.getCelulares();
          this.celularModelo = new CelularModel();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
