import { Injectable } from '@angular/core';

import { Registro } from './registro';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AsignaturaUnion } from './asignaturaUnion';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private urlEndPoint = 'http://localhost:8080/api/libros';

  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Registro[]> {

    return this.http.get<Registro[]>(this.urlEndPoint);
   // return of(libros);
  }

  getAsginaturas(): Observable<AsignaturaUnion[]>{
    return this.http.get<AsignaturaUnion[]>(this.urlEndPoint + '/asignatura');
  }

  create(libro: Registro): Observable<Registro>{

    return this.http.post<Registro>(this.urlEndPoint, libro, { headers: this.httpHeaders } );
  }
}
