import { Injectable } from '@angular/core';
import { EnemyNames } from 'src/assets/img/arrays/EnemyNames';
import { BattleShipModel } from 'src/models/battleship.model';

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

   playerShip: BattleShipModel;
   enemyShip: BattleShipModel;

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

class BattleShip {
   level: number;
   experience: number;
   name: string;

   wins: number;
   loses: number;
   statPoints: number;

   damage: number;
   speed: number;
   health: number;
   tech: number;
   accuracy: number;

   constructor(
      level: number,
      experience: number,
      name: string,

      damagePoints: number,
      speedPoints: number,
      healthPoints: number,
      techPoints: number,
      accuracyPoints: number,
   ){
      this.level = level;
      this.experience = experience;
      this.name = name;

      (damagePoints > 0)   ? this.damage  = (damagePoints * 5) + 95     : this.damage  = 100 ;
      (speedPoints > 0)    ? this.speed   = (speedPoints * 5) + 5       : this.speed   = 10 ;
      (healthPoints > 0)   ? this.health  = (healthPoints * 75) + 925   : this.health  = 1000 ;
      (techPoints > 0)     ? this.tech    = techPoints * 10             : this.tech    = 10 ;
      (accuracyPoints > 0) ? this.accuracy = (accuracyPoints * 5) + 5   : this.accuracy = 10 ;
   }
}

