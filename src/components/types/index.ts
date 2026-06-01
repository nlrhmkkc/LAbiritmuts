// Types és interfészek az alkalmazáshoz

export interface Direction {
  north: boolean;
  east: boolean;
  south: boolean;
  west: boolean;
}

export interface Position {
  x: number;
  y: number;
}

export interface GameState {
  playerPos: Position;
  treasureFound: Position[];
  treasureNeeded: number;
  treasureCollected: number;
  mapLoaded: boolean;
  gameActive: boolean;
}

export interface TileMapping {
  char: string;
  imagePath: string;
  rotation: number;
}

export interface MapData {
  width: number;
  height: number;
  tiles: string[][];
}

export interface LanguageStrings {
  [key: string]: string;
}
