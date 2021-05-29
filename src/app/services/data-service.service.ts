import { Injectable } from '@angular/core';
import { EnemyNames } from 'src/Arrays/EnemyNames';
import { BattleShip } from 'src/Models/shipModel';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   playerData = {
      wins: 0,
      losses: 0,
   };

   playerShipData = {
      name: 'NamelessData',
      damage: 1,
      speed: 1,
      health: 1,
      tech: 1,
      accuracy: 1,
      statPoints: 20,
   };

   playerShip: BattleShip;
   enemyShip: BattleShip;

   syncPoints(): void {
      this.playerShip = new BattleShip(
         1, 0,
         this.playerShipData.name,
         this.playerShipData.damage,
         this.playerShipData.speed,
         this.playerShipData.health,
         this.playerShipData.tech,
         this.playerShipData.accuracy,
      );
      this.enemyShip = new BattleShip(
         1, 0,
         EnemyNames[this.getRandomInt(0, EnemyNames.length)],
         this.playerShipData.damage    + this.getRandomInt(-2, 2),
         this.playerShipData.speed     + this.getRandomInt(-2, 2),
         this.playerShipData.health    + this.getRandomInt(-2, 2),
         this.playerShipData.tech      + this.getRandomInt(-2, 2),
         this.playerShipData.accuracy  + this.getRandomInt(-2, 2),
      );
   }

   getRandomInt(min: number, max: number): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
   }

   getPlayerShip(): BattleShip {
      this.syncPoints();
      return this.playerShip;
   }

   getEnemyShip(): BattleShip {
      this.syncPoints();
      return this.enemyShip;
   }

   getEnemyShipNoRefresh(): BattleShip {
      return this.enemyShip;
   }

}
