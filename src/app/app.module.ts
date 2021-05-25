import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { MenuComponent } from './components/menu/menu.component';
import { ShipFormComponent } from './components/ship-form/ship-form.component';
import { StatFieldComponent } from './components/game/stat-field/stat-field.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MenuComponent,
    ShipFormComponent,
    StatFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
