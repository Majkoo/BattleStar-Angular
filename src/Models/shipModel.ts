export class BattleShip {
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

      (damagePoints > 0)   ? this.damage  = (damagePoints * 5) + 100 : this.damage  = 100 ;
      (speedPoints > 0)    ? this.speed   = speedPoints * 10   : this.speed   = 10 ;
      (healthPoints > 0)   ? this.health  = (healthPoints * 75) + 1000 : this.health  = 1000;
      (techPoints > 0)     ? this.tech    = techPoints * 10    : this.tech    = 10 ;
      (accuracyPoints > 0) ? this.accuracy = accuracyPoints * 10 : this.accuracy  = 10 ;
   }
}
