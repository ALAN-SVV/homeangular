import { Component } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent} from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Profesor, ProfesorService } from '../../service/profesores.service';

@Component({
  selector: 'app-form-data',
  standalone:true,
  imports: [ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './form-data.component.html',
  styleUrl: './form-data.component.css'
})
export class FormDataComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    profesion: new FormControl(''),
    descripcion: new FormControl('')
  });

  constructor(private profesorService: ProfesorService) {}//inyeccion de servicio 
  
  onSubmit() {
    if (this.profileForm.valid) {
      //Enviar todos los  datosdelformulario como un objetio Profesor
      this.profesorService.addProfesor(this.profileForm.value as Profesor);
      console.warn('Profesor guardado:',this.profileForm.value);
      this.profileForm.reset();
    }else {
      console.warn('Formulario no valido');
  }
}
}
