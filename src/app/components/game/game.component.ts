import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GameModel } from 'src/Models/navModel';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {


   gameNav: GameModel = {
      statField:     true,
      arenaPlanet:   true,
      shopPlanet:    true,
      insideShop:    false,
      insideArena:   false,
      battle:        false,
   };


   resetNav(): void {
      this.gameNav = {
         statField:     false,
         arenaPlanet:   false,
         shopPlanet:    false,
         insideShop:    false,
         insideArena:   false,
         battle:        false,
      };
   }

}
