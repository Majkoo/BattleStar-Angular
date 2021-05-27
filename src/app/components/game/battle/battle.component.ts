import { Component, OnInit } from '@angular/core';
import { BattleServiceService } from 'src/app/services/battle-service.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {

   constructor(private battleService: BattleServiceService) { }

   BattleService = this.battleService;
   LoggerContent = this.battleService.battleLog;

   PlayerShip = this.battleService.PlayerBShip;
   EnemyShip = this.battleService.EnemyBShip;

   EnemyDmgTaken: number;
   EnemyLRHealth = this.EnemyShip.cHealth;

   PlayerDmgTaken: number;
   PlayerLRHealth = this.PlayerShip.cHealth;

   ButtonsDisabled = false;


   sleepNow = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

   refresh(): void {
      this.BattleService = this.battleService;
      this.LoggerContent = this.battleService.battleLog;

      this.EnemyDmgTaken = this.EnemyShip.cHealth - this.EnemyLRHealth;
      this.EnemyLRHealth = this.EnemyShip.cHealth;
      this.EnemyShip = this.battleService.EnemyBShip;
      this.EnemyLRHealth = this.EnemyShip.cHealth;

      this.PlayerDmgTaken = this.PlayerShip.cHealth - this.PlayerLRHealth;
      this.PlayerLRHealth = this.PlayerShip.cHealth;
      this.PlayerShip = this.battleService.PlayerBShip;
      this.PlayerLRHealth = this.PlayerShip.cHealth;

   }

   getRandom(min, max): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
   }

   async Move(pMove: number, eMove: number, PlayerShip, EnemyShip): Promise<any> {

      this.ButtonsDisabled = true;

      await this.sleepNow(250);
      this.BattleService.Move(pMove, PlayerShip, EnemyShip);
      this.refresh();

      if (this.battleService.battle) {
         await this.sleepNow(1500);
         this.BattleService.Move(eMove, EnemyShip, PlayerShip);
         this.refresh();
      }

      this.ButtonsDisabled = false;
   }


}
