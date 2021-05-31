import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MenuNavModel } from 'src/models/menu-nav.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

   @Output() startGameEvent = new EventEmitter<void>();

   menu: MenuNavModel;

   ngOnInit(): void {
      this.menu = {
         main: true,
         shipForm: false,
         options: false,
         others: false,
      };
   }

   navReset(): void {
      this.menu = {
         main: false,
         shipForm: false,
         options: false,
         others: false,
      };
   }

   startGame(): void {
      this.startGameEvent.emit();
   }


}
