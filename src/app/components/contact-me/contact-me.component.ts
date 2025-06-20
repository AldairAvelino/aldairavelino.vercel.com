import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact, SocialLink } from '@models/interfaces';
import { getSocialLinks } from '@core/utils/socials-link.utils';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  socialLinks: SocialLink[] = getSocialLinks();
  contacts: Contact[] = [
    {
      email: 'aldair03avelino@gmail.com',
      phone: '+244 948 901 733',
    }
  ];

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }
}
