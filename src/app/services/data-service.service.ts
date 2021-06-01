import { Injectable } from '@angular/core';
import { EnemyNames } from 'src/assets/arrays/EnemyNames';
import { LvlUpExp } from 'src/assets/arrays/LvlUpExp';
import { BattleShipModel } from 'src/models/battleship.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   stat: number[] = [ 1, 1, 1, 1, 1 ];

   playerData = {
      wins: 0,
      losses: 0,

      level: 1,
      exp: 0,
      gold: 0,
      points: 0,
   };

   playerShipData = {
      name: 'NamelessData',
      damage: 1,
      speed: 1,
      health: 1,
      tech: 1,
      accuracy: 1,
   };

   playerShip: BattleShipModel;
   enemyShip: BattleShipModel;

   syncPoints(): void {

      if (this.playerData.exp >= LvlUpExp[this.playerData.level]) {
         this.playerData.level++;
         this.playerData.exp = 0;
      }

      this.playerShip = new BattleShip(
         this.playerData.level,
         this.playerData.exp,
         this.playerShipData.name,
         this.playerShipData.damage,
         this.playerShipData.speed,
         this.playerShipData.health,
         this.playerShipData.tech,
         this.playerShipData.accuracy,
      );
      this.genRandStats();
      this.enemyShip = new BattleShip(
         this.playerData.level,
         this.playerData.exp,
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
      const pointsSum = (
         this.playerShipData.damage +
         this.playerShipData.speed +
         this.playerShipData.health +
         this.playerShipData.tech +
         this.playerShipData.accuracy - 5);

      return pointsSum;
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
      (healthPoints > 0)   ? this.health  = (healthPoints * 75) + 425   : this.health  = 500 ;
      (techPoints > 0)     ? this.tech    = techPoints * 10             : this.tech    = 10 ;
      (accuracyPoints > 0) ? this.accuracy = (accuracyPoints * 5) + 5   : this.accuracy = 10 ;
   }
}

