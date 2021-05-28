import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-stat-field',
  templateUrl: './stat-field.component.html',
  styleUrls: ['./stat-field.component.scss']
})
export class StatFieldComponent implements OnInit {

   statField = {
      clicked: false,

      ShipName: 'Nameless',
      ShipDamage: 0,
      ShipHealth: 0,
      ShipSpeed: 0,
      ShipTech: 0,
      ShipAccuracy: 0,
      ShipWins: 0,
      ShipLoses: 0,
   };

   constructor(dataService: DataServiceService) {
      dataService.syncShipPoints();
      this.statField.ShipName = dataService.playerShip.name;
      this.statField.ShipDamage = dataService.playerShip.damage;
      this.statField.ShipHealth = dataService.playerShip.health;
      this.statField.ShipSpeed = dataService.playerShip.speed;
      this.statField.ShipTech = dataService.playerShip.tech;
      this.statField.ShipAccuracy = dataService.playerShip.accuracy;

      this.statField.ShipWins = dataService.playerShip.wins;
      this.statField.ShipLoses = dataService.playerShip.loses;
   }

  ngOnInit(): void {
  }

}
