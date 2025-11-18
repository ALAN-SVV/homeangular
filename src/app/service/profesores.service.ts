import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Profesor {
firstName: string;
lastName: string;
profession: string;
descripcion: string;
/*redes?: {nombre: string, icono:string;link:string};*/ 
}



@Injectable({
  providedIn: 'root'
})

export class ProfesorService {
  private profesoresSubject = new BehaviorSubject<Profesor[]>([]);
  profesores$: Observable<Profesor[]> = this.profesoresSubject.asObservable();

  constructor() {}

  addProfesor(profesor: Profesor): void {
    const profesoresActuales = this.profesoresSubject.getValue();
    this.profesoresSubject.next([...profesoresActuales, profesor]);
  }
}

