import { Component } from '@angular/core';
import { BattleServiceService } from 'src/app/services/battle-service.service';
import { GameModel } from 'src/Models/Nav/GameNavModel';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

   constructor(private battleService: BattleServiceService) {}

   gameNav: GameModel = {
      statField:     true,
      arenaPlanet:   true,
      shopPlanet:    true,
      insideShop:    false,
      insideArena:   false,
      battle:        false,
   };

   initBattle(): void {
      this.battleService.init();
   }

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
