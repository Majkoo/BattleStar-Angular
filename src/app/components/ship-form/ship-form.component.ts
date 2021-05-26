import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { NewShip } from 'src/Models/shipModel';

@Component({
   selector: 'app-ship-form',
   templateUrl: './ship-form.component.html',
   styleUrls: ['./ship-form.component.scss']
})
export class ShipFormComponent implements OnInit {

   @Output() startGameEvent = new EventEmitter<void>();
   @Output() ship: EventEmitter<NewShip> = new EventEmitter<NewShip>();

   formValues = {
      name: 'Nameless',
      damage: 1,
      speed: 1,
      health: 1,
      tech: 1,
      accuracy: 1,
      statPoints: 20,
   };

   constructor(private dataService: DataServiceService) {}

   ngOnInit(): void {
   }

   CreateShip(): void {
      this.startGameEvent.emit();
      this.dataService.playerShip.name          = this.formValues.name,
      this.dataService.playerShip.damagePoints  = this.formValues.damage,
      this.dataService.playerShip.speedPoints   = this.formValues.speed,
      this.dataService.playerShip.healthPoints  = this.formValues.health,
      this.dataService.playerShip.techPoints    = this.formValues.tech,
      this.dataService.playerShip.accuracyPoints = this.formValues.accuracy,

      this.dataService.playerShip.statPoints = 0,

      this.dataService.syncShipPoints();
      console.log(this.dataService.playerShip);
   }

}
