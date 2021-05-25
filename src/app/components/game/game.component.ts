import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GameModel } from 'src/Models/menuModel';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

   gameNav: GameModel;

   ngOnInit(): void {
      this.gameNav = {
         statField:     true,
         arenaPlanet:   true,
         shopPlanet:    true,
         insideShop:    false,
         insideArena:   false,
      };

   }

   resetNav(): void {
      this.gameNav = {
         statField:     false,
         arenaPlanet:   false,
         shopPlanet:    false,
         insideShop:    false,
         insideArena:   false,
      };
   }



}
