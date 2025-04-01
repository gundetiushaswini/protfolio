import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactData = { name: '', email: '', message: '' };

  submitContactForm() {
    console.log('Contact Form Submitted:', this.contactData);
    alert('Thank you for reaching out! I will get back to you soon.');
  }
}
