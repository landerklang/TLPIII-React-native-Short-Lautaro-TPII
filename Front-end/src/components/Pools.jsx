// pools.jsx — catálogo de pools con íconos pixel art del juego
// Importamos cada ícono desde isaacIcons.jsx
// Para cambiar el ícono de una pool: cambiá la importación o editá el SVG
// en isaacIcons.jsx buscando el nombre correspondiente.
import {
  TreasureIcon,
  DevilIcon,
  AngelIcon,
  SecretIcon,
  ShopIcon,
  BossIcon,
  CurseIcon,
  LibraryIcon,
  GoldenChestIcon,
  RedChestIcon,
  GreedIcon,
  CraneIcon,
  BombBumIcon,
  BatteryBumIcon,
  BeggarIcon,
  CustomPoolIcon,
  AddIcon,
} from "./Isaacicons.jsx";

export const DEFAULT_POOLS = [
  { id: "treasure", name: "Treasure Room", Icon: TreasureIcon },
  { id: "devil", name: "Devil Room", Icon: DevilIcon },
  { id: "angel", name: "Angel Room", Icon: AngelIcon },
  { id: "secret", name: "Secret Room", Icon: SecretIcon },
  { id: "shop", name: "Shop", Icon: ShopIcon },
  { id: "boss", name: "Boss Room", Icon: BossIcon },
  { id: "curse", name: "Curse Room", Icon: CurseIcon },
  { id: "library", name: "Library", Icon: LibraryIcon },
  { id: "golden", name: "Golden Chest", Icon: GoldenChestIcon },
  { id: "red_chest", name: "Red Chest", Icon: RedChestIcon },
  { id: "greed", name: "Greed Mode", Icon: GreedIcon },
  { id: "crane", name: "Crane Game", Icon: CraneIcon },
  { id: "bomb_bum", name: "Bomb Bum", Icon: BombBumIcon },
  { id: "battery_bum", name: "Battery Bum", Icon: BatteryBumIcon },
  { id: "beggar", name: "Beggar", Icon: BeggarIcon },
];

// Re-exportamos los íconos auxiliares para uso en PoolSelector
export { CustomPoolIcon, AddIcon };
