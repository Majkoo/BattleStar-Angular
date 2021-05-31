import { Component } from '@angular/core';
import { BattleServiceService } from 'src/app/services/battle-service.service';
import { GameNavModel } from 'src/models/game-nav.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

   constructor(private battleService: BattleServiceService) {}

   gameNav: GameNavModel = {
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
