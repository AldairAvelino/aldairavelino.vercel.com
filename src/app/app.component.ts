import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { WorkComponent } from "./components/work/work.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from '@components/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, WorkComponent, TestimonialsComponent, ContactMeComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aldairavelino.vercel.com';
}
