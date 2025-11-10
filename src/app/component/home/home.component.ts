import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from '../footer/footer.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CarruselComponent, InformacionComponent, TarjetaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
