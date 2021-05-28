import { Injectable } from '@angular/core';
import { Ship } from 'src/Models/shipModel';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   playerShip = {

      level: 1,
      experience: 0,
      name: 'Nameless',

      damagePoints:  10,
      speedPoints:   10,
      healthPoints:  10,
      techPoints:    1,
      accuracyPoints: 10,

      statPoints: 0,
      wins: 0,
      loses: 0,

      damage:  0,
      speed:   0,
      health:  0,
      tech:    0,
      accuracy: 0,

   };

   enemyShip = {

      level: 1,
      experience: 0,
      name: 'Galaktyczny Stec',

      damagePoints:  0,
      speedPoints:   0,
      healthPoints:  0,
      techPoints:    0,
      accuracyPoints: 0,

      statPoints: 0,
      wins: 0,
      loses: 0,

      damage:  0,
      speed:   0,
      health:  0,
      tech:    0,
      accuracy: 0,

   };

   syncShipPoints(): void {
      this.playerShip.damage = this.playerShip.damagePoints * 25;
      this.playerShip.speed = this.playerShip.speedPoints * 10;
      this.playerShip.health = this.playerShip.healthPoints * 175;
      this.playerShip.tech = this.playerShip.techPoints * 10;
      this.playerShip.accuracy = this.playerShip.accuracyPoints * 10;
   }

   syncEnemyPoints(): void {
      this.enemyShip.damagePoints = this.playerShip.damagePoints + Math.floor((Math.random() * 6) - 3);
      this.enemyShip.speedPoints = this.playerShip.speedPoints + Math.floor((Math.random() * 6) - 3);
      this.enemyShip.healthPoints = this.playerShip.healthPoints + Math.floor((Math.random() * 6) - 3);
      this.enemyShip.techPoints = this.playerShip.techPoints + Math.floor((Math.random() * 6) - 3);
      this.enemyShip.accuracyPoints = this.playerShip.accuracyPoints + Math.floor((Math.random() * 6) - 3);

      this.enemyShip.damage = this.enemyShip.damagePoints * 25;
      if ( this.enemyShip.damage < 45 ) { this.enemyShip.damage = 45; }

      this.enemyShip.speed = this.enemyShip.speedPoints * 10;
      if ( this.enemyShip.speed < 10 ) { this.enemyShip.speed = 10; }

      this.enemyShip.health = this.enemyShip.healthPoints * 175;
      if ( this.enemyShip.health < 500 ) { this.enemyShip.health = 500; }

      this.enemyShip.tech = this.enemyShip.techPoints * 10;
      if ( this.enemyShip.tech < 10 ) { this.enemyShip.tech = 10; }

      this.enemyShip.accuracy = this.enemyShip.accuracyPoints * 10;
      if ( this.enemyShip.accuracy < 10 ) { this.enemyShip.accuracy = 10; }
   }

   getPlayerShip(): Ship {
      this.syncShipPoints();
      return this.playerShip;
   }

   getEnemyShip(): Ship {
      this.syncEnemyPoints();
      return this.enemyShip;
   }

}
