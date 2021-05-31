import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Form } from 'src/models/form.model';

@Component({
   selector: 'app-ship-form',
   templateUrl: './ship-form.component.html',
   styleUrls: ['./ship-form.component.scss']
})
export class ShipFormComponent implements OnInit {

   @Output() startGameEvent = new EventEmitter<void>();

   formValues: Form;

   constructor(private dataService: DataServiceService) {}

   ngOnInit(): void {
      this.formValues = {
         name: 'Nameless',
         damage: 1,
         speed: 1,
         health: 1,
         tech: 1,
         accuracy: 1,
         statPoints: 20,
      };
   }

   CreateShip(): void {
      this.dataService.playerShipData = this.formValues;

      this.dataService.syncPoints();
      this.startGameEvent.emit();
   }

}
