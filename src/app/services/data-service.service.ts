import { Injectable } from '@angular/core';
import { EnemyNames } from 'src/Arrays/EnemyNames';
import { BattleShip } from 'src/Models/shipModel';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   stat: number[] = [ 1, 1, 1, 1, 1 ];

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
      this.genRandStats();
      this.enemyShip = new BattleShip(
         1, 0,
         EnemyNames[this.getRandomInt(0, EnemyNames.length)],
         this.stat[0],
         this.stat[1],
         this.stat[2],
         this.stat[3],
         this.stat[4],
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

   getPointsSum(): number {
      return (
         this.playerShipData.damage +
         this.playerShipData.speed +
         this.playerShipData.health +
         this.playerShipData.tech +
         this.playerShipData.accuracy - 5);
   }

   genRandStats(): void {
      this.stat = [ 1, 1, 1, 1, 1 ];
      let Points = this.getPointsSum();

      while ( Points > 0 ) {
         const rand = Math.floor(Math.random() * 5);
         this.stat[rand]++;
         Points--;
      }

   }

}
