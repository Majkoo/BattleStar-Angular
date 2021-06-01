import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BattleServiceService } from 'src/app/services/battle-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {

   constructor(private battleService: BattleServiceService, private dataService: DataServiceService) { }

   @Output() EndBattle = new EventEmitter<void>();

   BattleService = this.battleService;
   LoggerContent = this.battleService.battleLog;

   PlayerShip = this.battleService.PlayerBShip;
   EnemyShip = this.battleService.EnemyBShip;

   EnemyDmgTaken: number;
   EnemyLRHealth = this.EnemyShip.cHealth;
   EnemyDmgInfo: string | number;

   PlayerDmgTaken: number;
   PlayerLRHealth = this.PlayerShip.cHealth;
   PlayerDmgInfo: string | number;

   expGained: number;
   goldGained: number;

   ButtonsDisabled = false;
   PdmgVisible = false;
   EdmgVisible = false;
   announcement = false;


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

      this.expGained = this.battleService.expGained;
      this.goldGained = this.battleService.goldGained;

   }

   getRandom(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
   }

   async Move(pMove: number, eMove: number, PlayerShip, EnemyShip): Promise<any> {

      this.PdmgVisible = false;
      this.EdmgVisible = false;
      this.ButtonsDisabled = true;

      await this.sleepNow(100);
      this.EdmgVisible = true;
      this.BattleService.Move(pMove, PlayerShip, EnemyShip);
      this.refresh();
      this.EnemyDmgInfo = this.EnemyShip.log;


      if (this.battleService.battle) {
         await this.sleepNow(1200);
         this.EdmgVisible = false;
         await this.sleepNow(500);

         this.BattleService.Move(eMove, EnemyShip, PlayerShip);
         this.refresh();
         this.PlayerDmgInfo = this.PlayerShip.log;
         this.PdmgVisible = true;
         await this.sleepNow(1200);
         this.PdmgVisible = false;
      }

      this.ButtonsDisabled = false;

      if (this.battleService.destroyedShip) {
         this.ButtonsDisabled = true;
         await this.sleepNow(1500);
         this.announcement = true;
         await this.sleepNow(3000);
         this.announcement = false;
         this.EndBattle.emit();
      }

   }


   CheckForDodge(dmgTaken: number, dmgInfo: string): void {
      if (dmgTaken > 0) {
         dmgInfo = `${dmgTaken.toString()}HP`;
      } else {
         dmgInfo = `Dodged!`;
      }
   }
}
