import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { last } from 'rxjs';
import { Compañeros, CompañerosService } from '../../service/compañeros.service';

@Component({
  selector: 'app-formulario',
  standalone:true,
  imports: [NavbarComponent, FooterComponent,ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    cedula: new FormControl(''),
    carrera: new FormControl(''),
    semestre: new FormControl(''),
    edad: new FormControl('')
    
})

  constructor(private compañerosService: CompañerosService) {}//inyeccion de servicio

  onSubmit() {
    if (this.profileForm.valid) {
      //Enviar todos los  datosdelformulario como un objetio Profesor
      this.compañerosService.addCompañero(this.profileForm.value as Compañeros);
      console.warn('Compañero guardado:',this.profileForm.value);
      this.profileForm.reset();
    }else {
      console.warn('Formulario no valido');
  }

}
}