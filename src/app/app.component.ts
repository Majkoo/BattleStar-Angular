import { Component, OnInit } from '@angular/core';
import { AppNavModel } from 'src/models/app-nav.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'attempt-five';

  AppNav: AppNavModel;

   ngOnInit(): void {
      this.AppNav = {
         game: false,
         menu: true,
      };
   }

}
