import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'attempt-five';

  AppNav = {
      game: false,
      menu: false,
  };

  ngOnInit(): void {
     this.AppNav.game = true;
     this.AppNav.menu = false;
  }
}
