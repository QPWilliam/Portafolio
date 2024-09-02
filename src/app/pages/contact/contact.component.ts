import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const url = 'http://localhost:3000/send-email'; // URL de tu servidor backend

    const body = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post(url, body).subscribe(
      response => {
        console.log('Success response:', response); 
        alert('¡Mensaje enviado con éxito!');
      },
      error => {
        console.error('Error response:', error);
        alert('Hubo un error al enviar el mensaje.');
      }
    );
  }
}
