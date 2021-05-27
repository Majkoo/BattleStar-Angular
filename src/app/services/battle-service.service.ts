
import { Injectable } from '@angular/core';
import { Ship } from 'src/Models/shipModel';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})

export class BattleServiceService {

   constructor(private dataService: DataServiceService) {}

   selectedMove: Move;
   battleLog = '';
   battle = true;
   repairs = 1;
   round = 1;
   destroyedShip: BattleShip;

   PlayerBShip = new BattleShip(this.dataService.playerShip);
   EnemyBShip = new BattleShip(this.dataService.enemyShip);

   // quick    =  ~ ( 57%dmg - 64%dmg ) <90% base hit chance>
   // moderate =  ~ ( 82%dmg - 118%dmg ) <60% base hit chance>
   // precise  =  ~ ( 155%dmg - 165%dmg ) <30% base hit chance>

   // quick efectiveness:  60 avgDmg  - 90% avgHitChance (average damage per round: 54dmg)
   // moder. efectiveness: 100 avgDmg - 60% avgHitChance (average damage per round: 60dmg)
   // prec. efectiveness:  160 avgDmg - 30% avgHitChance (average damage per round: 48dmg)

   Move(selectedMove: Move, movingShip: BattleShip, opponent: BattleShip): void {
      this.battleLog += ` Round ${Math.floor(this.round)}: `;
      console.log('move done');

      if (this.battle) {
         if (selectedMove === 0) {
            this.battleLog += ` You tried to run! (fail)\n\n `;
            this.round += 0.5;
         } else
         if (selectedMove === 1) {
            this.QuickAttack(movingShip, opponent);
            this.round += 0.5;
         } else
         if (selectedMove === 2) {
            this.ModerateAttack(movingShip, opponent);
            this.round += 0.5;
         } else
         if (selectedMove === 3) {
            this.PreciseAttack(movingShip, opponent);
            this.round += 0.5;
         } else
         if (selectedMove === 4) {
            this.battleLog += ` Your self-repair failed \n\n`;
            this.round += 0.5;

         }
      }
      this.IsAliveCheck(opponent);

   }

   QuickAttack(attacker: BattleShip, defender: BattleShip): void {
      let HitValue: number = (attacker.damage * 0.8) + Math.floor(Math.random() * (0.1 * attacker.damage) - (0.05 * attacker.damage));
      console.log(HitValue);
      const HitChance: number = (Math.floor(Math.random() * (90 + attacker.hitAcc) + 1));
      const DodgeChance: number = defender.dodgeChance;
      const Hit = (HitChance - DodgeChance > 0) ? true : false;
      if (Hit) {
         defender.cHealth -= HitValue;
         this.battleLog += ` ${defender.name} has been hit for ${HitValue}HP! (Quick Attack) \n\n`;
      } else {
         this.battleLog += ` ${defender.name} dodged! \n\n`;
         HitValue = 0;
      }
      defender.cHealth = (defender.cHealth > 0) ? defender.cHealth : 0;
   }
   ModerateAttack(attacker: BattleShip, defender: BattleShip): void {
      let HitValue: number = (attacker.damage) + Math.floor(Math.random() * (0.4 * attacker.damage) - (0.2 * attacker.damage));
      const HitChance: number = (Math.floor(Math.random() * (60 + attacker.hitAcc) + 1));
      const DodgeChance: number = defender.dodgeChance;
      const Hit = (HitChance - DodgeChance > 0) ? true : false;
      if (Hit) {
         defender.cHealth -= HitValue;
         this.battleLog += ` ${defender.name} has been hit for ${HitValue}HP! (Moderate Attack) \n\n`;
      } else {
         this.battleLog += ` ${defender.name} dodged! \n\n`;
         HitValue = 0;
      }
      defender.cHealth = (defender.cHealth > 0) ? defender.cHealth : 0;
   }
   PreciseAttack(attacker: BattleShip, defender: BattleShip): void {
      let HitValue: number = (attacker.damage * 1.6) + Math.floor(Math.random() * (0.1 * attacker.damage) - (0.05 * attacker.damage));
      const HitChance: number = (Math.floor(Math.random() * (30 + attacker.hitAcc) + 1));
      const DodgeChance: number = defender.dodgeChance;
      const Hit = (HitChance - DodgeChance > 0) ? true : false;
      if (Hit) {
         defender.cHealth -= HitValue;
         this.battleLog += ` ${defender.name} has been hit for ${HitValue}HP! (Precise Attack) \n\n`;
      } else {
         this.battleLog += ` ${defender.name} dodged! \n\n`;
         HitValue = 0;
      }
      defender.cHealth = (defender.cHealth > 0) ? defender.cHealth : 0;
   }
   IsAliveCheck(ship: BattleShip): void {
      if ( ship.cHealth <= 0 ) {
         this.battleLog += `\n\n ${ship.name} Has been destroyed. \n\n`;
         this.battle = false;
         this.destroyedShip = ship;
      }
   }


}

class BattleShip {

   name: string;
   maxHealth: number;
   cHealth: number;
   damage: number;
   dodgeChance: number;
   hitAcc: number;
   critChance: number;

   constructor( ship: any ) {
      this.name = ship.name;
      this.maxHealth = ship.health;
      this.cHealth = ship.health;
      this.damage = ship.damage;
      this.dodgeChance = Math.floor( (Math.log(ship.speed + 2) / 3) / Math.log(1.06) );
      this.hitAcc = Math.floor( (Math.log(ship.accuracy + 2) / 3) / Math.log(1.06) );
   }

}

enum Move {
   RUN,
   QUICK_ATTACK,
   MODERATE_ATTACK,
   PRECISE_ATTACK,
   REPAIR_SELF,
}
