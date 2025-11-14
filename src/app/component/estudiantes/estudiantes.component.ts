import { Component } from '@angular/core';  
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

interface Estudiante {
  nombre: string;
  apellido: string;
  cedula: number;
  carrera: string;
  notas: number;
}

@Component({
  selector: 'app-estudiantes',
  imports: [ FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})


export class EstudiantesComponent {
estudiantes: Estudiante[]=[
  {
    nombre:"Maria",
    apellido:"Gonzalez",
    cedula:1102456789,
    carrera:'Ingeniería en sistemas',
    notas:50
  },
  {
    nombre:"Carlos",
    apellido:"Rodriguez",
    cedula:1102345678,
    carrera:'Administración',
    notas:40
  },
  {
    nombre:"Ana",
    apellido:"Martinez",
    cedula:1102234567,
    carrera:'Medicina',
    notas:76,
  },
  {
    nombre:"Luis",
    apellido:"Perez",
    cedula:1102123456,
    carrera:'Derecho',
    notas:85,
  },
  {
    nombre:"Sofia",
    apellido:"Hernandez",
    cedula:1102012345,
    carrera:'Psicología',
    notas:90,
  },
  {
    nombre:"Diego",
    apellido:"Ramirez",
    cedula:1102987654,
    carrera:'Arquitectura',
    notas:39,
  },
  {
    nombre:"Elena",
    apellido:"Torres",
    cedula:1102876543,
    carrera:'Contabilidad',
    notas:87,
  },
{
    nombre:"Javier",
    apellido:"Diaz",
    cedula:1102765432,
    carrera:'Marketing',
    notas:69,
  },
{
    nombre:"Paula",
    apellido:"Sanchez",
    cedula:1102654321,
    carrera:'Enfermería',
    notas:91,
  },
  {
    nombre:"Miguel",
    apellido:"Castillo",
    cedula:1102543210,
    carrera:'Educación',
    notas:64,
  },
  
]

  MostrarDatos(estudiante: any){ // Metodo para mostrar los datos, any es para el tipo de dato
  console.log('Nombre de usuario:', estudiante);
  }
}
