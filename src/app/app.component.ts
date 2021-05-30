import { Component, OnInit } from '@angular/core';
import { AppModel } from 'src/Models/Nav/AppNavModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'attempt-five';

  AppNav: AppModel;

   ngOnInit(): void {
      this.AppNav = {
         game: false,
         menu: true,
      };
   }

}
