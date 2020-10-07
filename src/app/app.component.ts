import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang');
    translate.setDefaultLang(lang || 'en');
  }

}
