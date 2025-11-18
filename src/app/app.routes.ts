import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';    
import {FooterComponent} from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CarruselComponent } from './component/carrusel/carrusel.component';
import { InformacionComponent } from './component/informacion/informacion.component';
import { TarjetaComponent } from './component/tarjeta/tarjeta.component';
import { ProfesComponent } from './component/profes/profes.component';
import { EstudiantesComponent } from './component/estudiantes/estudiantes.component';
import { FormDataComponent } from './component/form-data/form-data.component';
import { AlumnosComponent } from './component/alumnos/alumnos.component';
import { FormularioComponent } from './component/formulario/formulario.component';

export const routes: Routes = [
    {path:"", redirectTo: "home", pathMatch: "full"},
    {path:"home", component: HomeComponent},
    {path:"navbar", component: NavbarComponent},
    {path:"footer", component: FooterComponent},
    {path: "carrusel", component: CarruselComponent},
    {path: "informacion", component:InformacionComponent},
    {path: "tarjeta", component: TarjetaComponent},
    {path: "profes", component: ProfesComponent},
    {path: "estudiantes", component: EstudiantesComponent},
    {path: "form-data", component: FormDataComponent},
    {path: "alumnos", component: AlumnosComponent},
    {path: "formulario", component: FormularioComponent}
];
