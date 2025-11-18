import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';
import { EstudiantesComponent } from "../estudiantes/estudiantes.component";


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CarruselComponent, InformacionComponent, TarjetaComponent, EstudiantesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
