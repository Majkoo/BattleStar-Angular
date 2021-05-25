import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   playerShip = {

      level: 1,
      experience: 0,
      name: 'Nameless',

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

}
