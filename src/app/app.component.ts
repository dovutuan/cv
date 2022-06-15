import {DOCUMENT} from '@angular/common';
import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {educations} from 'src/config/education.config';
import {participatingProjects} from 'src/config/participatingProject.config';
import {socials} from 'src/config/social.config';
import {workExperiences} from 'src/config/workExperience.config';
import {skills} from 'src/config/skill.config';
import {info} from 'src/config/info.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  info: { name: string, phone: string, email: string, address: string, technology: string, description: string } | undefined;

  socials: Array<{ href: string, icon: string }> | undefined;

  educations: Array<{ specialize: string; year: string; description: string; }> | undefined;

  workExperiences: Array<{ specialize: string, company: string, year: string, description: string }> | undefined;

  participatingProjects: Array<{ nameProject: string, position: string, description: string }> | undefined;

  skills: Array<{ name: string, percent: number }> | undefined;

  constructor(private translate: TranslateService,
              @Inject(DOCUMENT) private document: Document) {

    const userLang = navigator.language.split('-')[0] || 'en';
    const lang = /(en|vi)/gi.test(userLang) ? userLang : 'en';
    const key = lang.toUpperCase();

    translate.setDefaultLang(lang);
    translate.use(lang);

    this.document.documentElement.lang = lang;

    this.info = info[key];
    this.socials = socials;
    this.educations = educations[key];
    this.workExperiences = workExperiences[key];
    this.participatingProjects = participatingProjects[key];
    this.skills = skills;
  }

  scrollTop(): void {
    const element = document.getElementById('body');
    // @ts-ignore
    element.scrollTop = 0
  }
}
