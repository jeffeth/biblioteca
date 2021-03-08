import { AsignaturaUnion } from './asignaturaUnion';
export class Registro {
  id: number;
  autor: string;
  year: string;
  titulo: string;
  numeroEdicion: number;
  editorial: string;
  serie: string;
  url: string;
  tipoRecurso: number;
  sugerencias: string;
  observaciones: string;
  asignatura: AsignaturaUnion;

}
