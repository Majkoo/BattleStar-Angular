
import { Injectable } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})

export class BattleServiceService {

   constructor(private dataService: DataServiceService) {}

   battle: boolean;

   selectedMove: Move;
   battleLog: string;
   repairs: number;
   round: number;
   destroyedShip: InBattleShip;

   PlayerBShip: InBattleShip;
   EnemyBShip: InBattleShip;

   init(): void {
      console.log('initialiset');
      this.PlayerBShip = new InBattleShip(
         this.dataService.playerShip.name,
         this.dataService.playerShip.health,
         this.dataService.playerShip.damage,
         this.dataService.playerShip.speed,
         this.dataService.playerShip.accuracy
         );
      this.EnemyBShip = new InBattleShip(
         this.dataService.enemyShip.name,
         this.dataService.enemyShip.health,
         this.dataService.enemyShip.damage,
         this.dataService.enemyShip.speed,
         this.dataService.enemyShip.accuracy
         );

      this.destroyedShip = null;
      this.battle = true;
      this.battleLog = '';
      this.repairs = 1;
      this.round = 1;
   }

   // quick    =  ~ ( 57%dmg - 64%dmg ) <90% base hit chance>
   // moderate =  ~ ( 82%dmg - 118%dmg ) <60% base hit chance>
   // risky    =  ~ ( 155%dmg - 165%dmg ) <30% base hit chance>

   // quick efectiveness:  60 avgDmg  - 90% avgHitChance (average damage per round: 54dmg)
   // moder. efectiveness: 100 avgDmg - 60% avgHitChance (average damage per round: 60dmg)
   // risky efectiveness:  160 avgDmg - 30% avgHitChance (average damage per round: 48dmg)

   Move(selectedMove: Move, movingShip: InBattleShip, opponent: InBattleShip): void {
      this.battleLog += ` Round ${Math.floor(this.round)}: `;

      if (this.battle) {
         if (selectedMove === Move.RUN) {
            this.battleLog += ` You tried to run! (fail)\n\n `;
            this.round += 0.5;
         } else
         if (selectedMove === Move.QUICK_ATTACK) {
            this.QuickAttack(movingShip, opponent);
            this.round += 0.5;
         } else
         if (selectedMove === Move.MODERATE_ATTACK) {
            this.ModerateAttack(movingShip, opponent);
            this.round += 0.5;
         } else
         if (selectedMove === Move.RISKY_ATTACK) {
            this.RiskyAttack(movingShip, opponent);
            this.round += 0.5;
         } else
         if (selectedMove === Move.REPAIR_SELF) {
            this.battleLog += ` Your self-repair failed \n\n`;
            this.round += 0.5;

         }
      }
      this.IsAliveCheck(opponent);

   }

   QuickAttack(attacker: InBattleShip, defender: InBattleShip): void {
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
   ModerateAttack(attacker: InBattleShip, defender: InBattleShip): void {
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
   RiskyAttack(attacker: InBattleShip, defender: InBattleShip): void {
      let HitValue: number = (attacker.damage * 1.6) + Math.floor(Math.random() * (0.1 * attacker.damage) - (0.05 * attacker.damage));
      const HitChance: number = (Math.floor(Math.random() * (30 + attacker.hitAcc) + 1));
      const DodgeChance: number = defender.dodgeChance;
      const Hit = (HitChance - DodgeChance > 0) ? true : false;
      if (Hit) {
         defender.cHealth -= HitValue;
         this.battleLog += ` ${defender.name} has been hit for ${HitValue}HP! (Risky Attack) \n\n`;
      } else {
         this.battleLog += ` ${defender.name} dodged! \n\n`;
         HitValue = 0;
      }
      defender.cHealth = (defender.cHealth > 0) ? defender.cHealth : 0;
   }
   IsAliveCheck(ship: InBattleShip): void {
      if ( ship.cHealth <= 0 ) {
         this.battleLog += `\n\n ${ship.name} Has been destroyed. \n\n`;
         this.battle = false;
         this.destroyedShip = ship;

         if (this.destroyedShip === this.EnemyBShip) {
            this.dataService.playerData.wins += 1;
         } else
         if (this.destroyedShip === this.PlayerBShip) {
            this.dataService.playerData.losses += 1;
         }

      }
   }

}

class InBattleShip {

   name: string;
   maxHealth: number;
   cHealth: number;
   damage: number;

   dodgeChance: number;
   hitAcc: number;

   constructor( name: string, health: number, damage: number, speed: number, accuracy: number ) {
      this.name = name;
      this.maxHealth = health;
      this.cHealth = health;
      this.damage = damage;
      this.dodgeChance = Math.floor( (Math.log(speed + 2) / 3) / Math.log(1.06) );
      this.hitAcc = Math.floor( (Math.log(accuracy + 2) / 3) / Math.log(1.06) );
   }

}

enum Move {
   RUN,
   QUICK_ATTACK,
   MODERATE_ATTACK,
   RISKY_ATTACK,
   REPAIR_SELF,
}

