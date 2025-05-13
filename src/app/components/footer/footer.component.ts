import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getCurrentYear } from '@core/utils/year.utils';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = getCurrentYear();
  author: string = 'Aldair Avelino';
}
