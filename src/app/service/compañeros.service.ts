import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface Compañeros {
name: string;
cedula: string;
carrera: string;
semestre: string;
edad: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompañerosService {
  private compañerosSubject = new BehaviorSubject<Compañeros[]>([]);
  compañeros$: Observable<Compañeros[]> = this.compañerosSubject.asObservable();
  constructor() { }

  addCompañero(compañero: Compañeros): void {
    const compañerosActuales = this.compañerosSubject.getValue();
    this.compañerosSubject.next([...compañerosActuales, compañero]);
}


}
