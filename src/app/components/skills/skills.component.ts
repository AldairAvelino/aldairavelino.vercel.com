import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '@models/interfaces';
import { Subscription } from 'rxjs';
import { ThemeService } from '@core/services/theme.service';
import { getSkills } from '@core/utils/skills.utils';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription | undefined;
  skills: Skill[] = getSkills();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeSubscription = this.themeService.isDarkTheme$.subscribe((isDark) => {
      this.skills.forEach((skill) => {
        skill.currentIcon = isDark  && skill.darkIcon ? skill.darkIcon : skill.lightIcon;
      });
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription?.unsubscribe();
  }
}
