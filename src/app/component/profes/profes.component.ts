import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-profes',
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './profes.component.html',
  styleUrl: './profes.component.css'
})
export class ProfesComponent {
  usuario1={
    nombre:"Elvis Pachacama",
    profesion:'ingeniero de sistemas',
    descripcion:'Apasionado de la IA',
  };
  usuario2={
    nombre:'Gabriel Hoyos',
    profesion:'Desarollo de software',
    descripcion:'Amante del codigo limpio y soluciones eficientes',
    redes:[
      {nombre: 'github', icono:'fab fa-github', link: '#'},
      {nombre: 'stack-overflow', icono:'fab fa-stack-overflow', link: '#'}
    ]
  };
  usuario3={
    nombre:'Monica Ramirez',
    profesion:'Analisis de datos',
    descripcion:'Experta ene ncontrara patrones y extraer informacion valiosa.',
  };

}
