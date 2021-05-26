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

      damagePoints:  1,
      speedPoints:   1,
      healthPoints:  1,
      techPoints:    1,
      accuracyPoints: 1,

      statPoints: 0,

      damage:  0,
      speed:   0,
      health:  0,
      tech:    0,
      accuracy: 0,

   };

   enemyShip = {

      level: 1,
      experience: 0,
      name: 'Nameless Enemy',

      damagePoints:  0,
      speedPoints:   0,
      healthPoints:  0,
      techPoints:    0,
      accuracyPoints: 0,

      statPoints: 0,

      damage:  0,
      speed:   0,
      health:  0,
      tech:    0,
      accuracy: 0,

   };

   syncShipPoints(): void {
      this.playerShip.damage = this.playerShip.damagePoints * 15;
      this.playerShip.speed = this.playerShip.speedPoints * 10;
      this.playerShip.health = this.playerShip.healthPoints * 200;
      this.playerShip.tech = this.playerShip.techPoints * 10;
      this.playerShip.accuracy = this.playerShip.accuracyPoints * 10;
   }

   syncEnemyPoints(): void {
      this.enemyShip.damagePoints = this.playerShip.damagePoints + Math.floor((Math.random() * 6) - 3);
      this.enemyShip.speedPoints = this.playerShip.speedPoints + Math.floor((Math.random() * 6) - 3);
      this.enemyShip.healthPoints = this.playerShip.healthPoints + Math.floor((Math.random() * 6) - 3);
      this.enemyShip.techPoints = this.playerShip.techPoints + Math.floor((Math.random() * 6) - 3);
      this.enemyShip.accuracyPoints = this.playerShip.accuracyPoints + Math.floor((Math.random() * 6) - 3);

      this.enemyShip.damage = this.enemyShip.damagePoints * 15;
      if ( this.enemyShip.damage < 45 ) { this.enemyShip.damage = 45; }

      this.enemyShip.speed = this.enemyShip.speedPoints * 10;
      if ( this.enemyShip.speed < 10 ) { this.enemyShip.speed = 10; }

      this.enemyShip.health = this.enemyShip.healthPoints * 200;
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
