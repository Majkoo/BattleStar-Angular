export interface MenuModel {
   main: boolean;
   shipForm: boolean;
   options: boolean;
   others: boolean;
}

export interface GameModel {
   statField: boolean;
   arenaPlanet: boolean;
   shopPlanet: boolean;
   insideShop: boolean;
   insideArena: boolean;
   battle: boolean;
}

export interface AppModel {
   game: boolean;
   menu: boolean;
}
