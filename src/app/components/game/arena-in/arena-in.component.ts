import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-arena-in',
  templateUrl: './arena-in.component.html',
  styleUrls: ['./arena-in.component.scss']
})
export class ArenaInComponent implements OnInit {

   constructor(private dataService: DataServiceService){}

   enemyShip: any;
   playerShip: any;

   ngOnInit(): void {
      this.refreshShips();
   }

   refreshShips(): void {
      this.enemyShip = this.dataService.getEnemyShip();
      this.playerShip = this.dataService.getPlayerShip();
   }

}
