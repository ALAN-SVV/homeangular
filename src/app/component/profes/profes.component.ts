import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common'; 
import { UrlCodec } from '@angular/common/upgrade';

interface Usuario {
  nombre: string;
  profesion: string;
  descripcion: string;
  redes?: { nombre: string; icono: string; link: string }[];
  img: string;
}

@Component({
  selector: 'app-profes',
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './profes.component.html',
  styleUrl: './profes.component.css'
})

export class ProfesComponent {
  usuarios: Usuario[]=[
{
    nombre:"Elvis Pachacama",
    profesion:'ingeniero de sistemas',
    descripcion:'Apasionado de la IA',
    img: "images/elvis.png"
   
  },
  {
    nombre:'Gabriel Hoyos',
    profesion:'Desarollo de software',
    descripcion:'Amante del codigo limpio y soluciones eficientes',
    img: "images/gabo.jpg",
   
    redes:[
      {nombre: 'github', icono:'fab fa-github', link: '#'},
      {nombre: 'stack-overflow', icono:'fab fa-stack-overflow', link: '#'}
    ],
    
  },
  {
    nombre:'Monica Ramirez',
    profesion:'Analisis de datos',
    descripcion:'Experta ene ncontrara patrones y extraer informacion valiosa.',
    img: "images/moni.jpg"
  },
  {
    nombre:'Monica Ramirez',
    profesion:'Analisis de datos',
    descripcion:'Experta ene ncontrara patrones y extraer informacion valiosa.',
    img: ""
  },
  {
    
    nombre:'Monica Ramirez',
    profesion:'Analisis de datos',
    descripcion:'Experta ene ncontrara patrones y extraer informacion valiosa.',
    img: ""
  }
 ]

  mostrarDatos(usuario: any){ // Metodo para mostrar los datos, any es para el tipo de dato
  console.log('Nombre de usuario:', usuario);
  }
  mostrarRedesSociales: boolean = true;
}

