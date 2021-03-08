import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from './registro';
import { RegistroService } from './registro.service';
import Swal from 'sweetalert2';
import { AsignaturaUnion } from './asignaturaUnion';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'

})
export class FormComponent implements OnInit {

  public libro: Registro = new  Registro();
  public asignatura: AsignaturaUnion[];
  constructor(private registroService: RegistroService,
              private router: Router) { }

  ngOnInit(): void {
    this.registroService.getAsginaturas().subscribe(
      asignatura =>  this.asignatura = asignatura
    );
  }

  public create(): void{

    this.registroService.create(this.libro).subscribe(
      respuesta =>{ this.router.navigate(['/registro'])
                    Swal.fire( 'Bibliografía guardada correctamente', '', 'success' );
    }
    );
  }

}
