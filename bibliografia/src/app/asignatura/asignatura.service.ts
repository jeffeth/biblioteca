import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  private urlEndPoint = 'http://localhost:8080/api/libros';

  constructor() { }
}
