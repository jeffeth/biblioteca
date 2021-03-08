import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'

})
export class RegistroComponent implements OnInit {

  libros: Registro[];
  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {
     this.registroService.getLibros().subscribe(
       libro => this.libros = libro
     );
  }

}
