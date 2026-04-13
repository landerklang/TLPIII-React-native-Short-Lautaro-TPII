// isaacIcons.jsx
// ─────────────────────────────────────────────────────────────
// Todos los íconos del proyecto dibujados como SVG pixel art,
// inspirados en los sprites reales de The Binding of Isaac.
//
// ¿Por qué SVG pixel art en lugar de emojis?
// Los emojis se ven distinto en cada sistema operativo (Windows,
// Android, iOS) y no se pueden estilizar con CSS. Los SVG siempre
// se ven igual y podés cambiarle el tamaño y color libremente.
//
// ¿Cómo cambiar un ícono?
// Cada ícono es un componente React que devuelve un <svg>.
// Para cambiar el dibujo editá los paths/rects dentro del viewBox.
// El atributo "size" controla el ancho/alto en píxeles (default 24).
// ─────────────────────────────────────────────────────────────

// ──────────────────────────────
// ÍCONO ACTIVO — Dado de 6 caras
// En el juego los ítems activos se representan con un dado/batería.
// Un cuadrado oscuro con puntos blancos, borde redondeado.
// ──────────────────────────────
export const ActiveIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Cuerpo del dado */}
    <rect x="1" y="1" width="14" height="14" rx="2" fill="#4a90d9" />
    <rect x="2" y="2" width="12" height="12" rx="1" fill="#2c6fad" />
    {/* Puntos del dado — patrón de 3 */}
    <rect x="4" y="4" width="2" height="2" fill="#e8f4fc" />
    <rect x="10" y="4" width="2" height="2" fill="#e8f4fc" />
    <rect x="7" y="7" width="2" height="2" fill="#e8f4fc" />
    <rect x="4" y="10" width="2" height="2" fill="#e8f4fc" />
    <rect x="10" y="10" width="2" height="2" fill="#e8f4fc" />
    {/* Brillo superior */}
    <rect x="2" y="2" width="12" height="1" fill="rgba(255,255,255,0.2)" />
  </svg>
);

// ──────────────────────────────
// ÍCONO PASIVO — Corazón
// Los ítems pasivos en Isaac suelen representarse con corazones.
// Corazón pixel art rojo con brillo.
// ──────────────────────────────
export const PassiveIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Corazón pixel art — forma clásica de 8 bits */}
    <rect x="2" y="4" width="3" height="2" fill="#c0392b" />
    <rect x="5" y="2" width="2" height="2" fill="#c0392b" />
    <rect x="7" y="2" width="2" height="2" fill="#c0392b" />
    <rect x="9" y="4" width="3" height="2" fill="#c0392b" />
    <rect x="11" y="4" width="3" height="2" fill="#c0392b" />
    <rect x="1" y="4" width="2" height="4" fill="#c0392b" />
    <rect x="12" y="4" width="2" height="4" fill="#c0392b" />
    <rect x="1" y="6" width="14" height="4" fill="#c0392b" />
    <rect x="2" y="10" width="12" height="2" fill="#c0392b" />
    <rect x="4" y="12" width="8" height="2" fill="#c0392b" />
    <rect x="6" y="14" width="4" height="1" fill="#c0392b" />
    {/* Brillo */}
    <rect x="4" y="4" width="2" height="2" fill="#e74c3c" />
    <rect x="5" y="3" width="1" height="1" fill="#ff7675" />
  </svg>
);

// ──────────────────────────────
// ÍCONO TREASURE ROOM — Cofre dorado
// ──────────────────────────────
export const TreasureIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="1" y="6" width="14" height="9" fill="#8B6914" />
    <rect x="2" y="7" width="12" height="7" fill="#b8860b" />
    <rect x="1" y="5" width="14" height="3" fill="#d4af37" />
    <rect x="2" y="5" width="12" height="1" fill="#f5d060" />
    <rect x="6" y="7" width="4" height="3" rx="0" fill="#d4af37" />
    <rect x="7" y="8" width="2" height="1" fill="#8B6914" />
    <rect x="3" y="9" width="2" height="1" fill="#8B6914" />
    <rect x="11" y="9" width="2" height="1" fill="#8B6914" />
    {/* Estrella arriba */}
    <rect x="7" y="1" width="2" height="1" fill="#f5d060" />
    <rect x="6" y="2" width="4" height="1" fill="#f5d060" />
    <rect x="5" y="3" width="6" height="1" fill="#f5d060" />
    <rect x="6" y="4" width="4" height="1" fill="#f5d060" />
    <rect x="7" y="5" width="2" height="1" fill="#f5d060" />
  </svg>
);

// ──────────────────────────────
// ÍCONO DEVIL ROOM — Calavera diabólica roja
// ──────────────────────────────
export const DevilIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Cuernos */}
    <rect x="2" y="1" width="2" height="4" fill="#c0392b" />
    <rect x="12" y="1" width="2" height="4" fill="#c0392b" />
    <rect x="1" y="1" width="2" height="2" fill="#c0392b" />
    <rect x="13" y="1" width="2" height="2" fill="#c0392b" />
    {/* Cara */}
    <rect x="3" y="4" width="10" height="9" fill="#c0392b" />
    <rect x="2" y="5" width="12" height="7" fill="#c0392b" />
    {/* Ojos */}
    <rect x="4" y="7" width="3" height="3" fill="#1a0000" />
    <rect x="9" y="7" width="3" height="3" fill="#1a0000" />
    {/* Boca */}
    <rect x="5" y="11" width="2" height="1" fill="#1a0000" />
    <rect x="9" y="11" width="2" height="1" fill="#1a0000" />
    <rect x="6" y="12" width="4" height="1" fill="#1a0000" />
  </svg>
);

// ──────────────────────────────
// ÍCONO ANGEL ROOM — Cruz blanca
// En el juego, la Angel Room tiene una cruz brillante
// ──────────────────────────────
export const AngelIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="6" y="1" width="4" height="14" fill="#d4c5f0" />
    <rect x="1" y="5" width="14" height="4" fill="#d4c5f0" />
    <rect x="7" y="1" width="2" height="14" fill="#f0ebff" />
    <rect x="1" y="6" width="14" height="2" fill="#f0ebff" />
    {/* Brillo central */}
    <rect x="7" y="7" width="2" height="2" fill="#ffffff" />
  </svg>
);

// ──────────────────────────────
// ÍCONO SECRET ROOM — Interrogación en pared
// ──────────────────────────────
export const SecretIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="1" y="1" width="14" height="14" fill="#3d3040" />
    <rect x="2" y="2" width="12" height="12" fill="#2a1f30" />
    {/* ? pixel art */}
    <rect x="5" y="3" width="6" height="2" fill="#9b8ab0" />
    <rect x="3" y="3" width="2" height="2" fill="#9b8ab0" />
    <rect x="11" y="3" width="2" height="4" fill="#9b8ab0" />
    <rect x="7" y="7" width="4" height="2" fill="#9b8ab0" />
    <rect x="7" y="9" width="2" height="2" fill="#9b8ab0" />
    <rect x="7" y="12" width="2" height="2" fill="#9b8ab0" />
  </svg>
);

// ──────────────────────────────
// ÍCONO SHOP — Moneda de centavo
// ──────────────────────────────
export const ShopIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Moneda circular pixel art */}
    <rect x="4" y="1" width="8" height="2" fill="#d4af37" />
    <rect x="2" y="3" width="12" height="10" fill="#d4af37" />
    <rect x="4" y="13" width="8" height="2" fill="#d4af37" />
    <rect x="3" y="2" width="10" height="12" fill="#f5d060" />
    {/* Letra C de cent */}
    <rect x="7" y="4" width="4" height="2" fill="#8B6914" />
    <rect x="5" y="6" width="2" height="4" fill="#8B6914" />
    <rect x="7" y="10" width="4" height="2" fill="#8B6914" />
    {/* Brillo */}
    <rect x="4" y="3" width="4" height="2" fill="#fff8a0" />
  </svg>
);

// ──────────────────────────────
// ÍCONO BOSS ROOM — Calavera con corona
// ──────────────────────────────
export const BossIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Corona */}
    <rect x="2" y="2" width="2" height="4" fill="#d4af37" />
    <rect x="7" y="1" width="2" height="3" fill="#d4af37" />
    <rect x="12" y="2" width="2" height="4" fill="#d4af37" />
    <rect x="2" y="5" width="12" height="2" fill="#d4af37" />
    {/* Calavera */}
    <rect x="3" y="7" width="10" height="7" fill="#e8e0d0" />
    <rect x="2" y="8" width="12" height="5" fill="#e8e0d0" />
    <rect x="4" y="9" width="3" height="3" fill="#3d3040" />
    <rect x="9" y="9" width="3" height="3" fill="#3d3040" />
    <rect x="5" y="13" width="2" height="2" fill="#8B7355" />
    <rect x="9" y="13" width="2" height="2" fill="#8B7355" />
  </svg>
);

// ──────────────────────────────
// ÍCONO CURSE ROOM — Llamas
// ──────────────────────────────
export const CurseIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="6" y="1" width="4" height="2" fill="#e74c3c" />
    <rect x="4" y="3" width="8" height="2" fill="#e74c3c" />
    <rect x="2" y="5" width="4" height="2" fill="#e74c3c" />
    <rect x="10" y="5" width="4" height="2" fill="#e74c3c" />
    <rect x="1" y="7" width="14" height="8" fill="#e74c3c" />
    <rect x="2" y="6" width="12" height="8" fill="#e74c3c" />
    {/* Llama interna naranja */}
    <rect x="5" y="5" width="6" height="2" fill="#f39c12" />
    <rect x="4" y="7" width="8" height="6" fill="#f39c12" />
    {/* Núcleo amarillo */}
    <rect x="6" y="9" width="4" height="4" fill="#f5d060" />
    <rect x="7" y="8" width="2" height="6" fill="#f5d060" />
  </svg>
);

// ──────────────────────────────
// ÍCONO LIBRARY — Libro abierto
// ──────────────────────────────
export const LibraryIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Tapa del libro */}
    <rect x="1" y="3" width="14" height="11" fill="#8B4513" />
    <rect x="2" y="4" width="6" height="9" fill="#c4863a" />
    <rect x="8" y="4" width="6" height="9" fill="#a0642a" />
    {/* Lomo */}
    <rect x="7" y="3" width="2" height="11" fill="#5D2E0C" />
    {/* Páginas — líneas de texto pixel */}
    <rect x="3" y="6" width="4" height="1" fill="#f5e6c8" />
    <rect x="3" y="8" width="4" height="1" fill="#f5e6c8" />
    <rect x="3" y="10" width="4" height="1" fill="#f5e6c8" />
    <rect x="9" y="6" width="4" height="1" fill="#f5e6c8" />
    <rect x="9" y="8" width="4" height="1" fill="#f5e6c8" />
    <rect x="9" y="10" width="4" height="1" fill="#f5e6c8" />
    {/* Brillo tapa */}
    <rect x="2" y="4" width="6" height="1" fill="#d4983a" />
  </svg>
);

// ──────────────────────────────
// ÍCONO GOLDEN CHEST — Cofre dorado brillante
// ──────────────────────────────
export const GoldenChestIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="1" y="7" width="14" height="8" fill="#8B6914" />
    <rect x="2" y="8" width="12" height="6" fill="#d4af37" />
    <rect x="1" y="5" width="14" height="3" fill="#f5d060" />
    <rect x="2" y="5" width="12" height="1" fill="#fff8a0" />
    <rect x="6" y="8" width="4" height="3" fill="#f5d060" />
    <rect x="7" y="9" width="2" height="1" fill="#8B6914" />
    <rect x="3" y="10" width="2" height="1" fill="#8B6914" />
    <rect x="11" y="10" width="2" height="1" fill="#8B6914" />
    {/* Destello */}
    <rect x="13" y="3" width="2" height="1" fill="#fff8a0" />
    <rect x="14" y="2" width="1" height="3" fill="#fff8a0" />
  </svg>
);

// ──────────────────────────────
// ÍCONO RED CHEST — Cofre rojo maldito
// ──────────────────────────────
export const RedChestIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="1" y="7" width="14" height="8" fill="#7B0000" />
    <rect x="2" y="8" width="12" height="6" fill="#B22222" />
    <rect x="1" y="5" width="14" height="3" fill="#c0392b" />
    <rect x="2" y="5" width="12" height="1" fill="#e74c3c" />
    <rect x="6" y="8" width="4" height="3" fill="#c0392b" />
    <rect x="7" y="9" width="2" height="1" fill="#7B0000" />
    <rect x="3" y="10" width="2" height="1" fill="#7B0000" />
    <rect x="11" y="10" width="2" height="1" fill="#7B0000" />
  </svg>
);

// ──────────────────────────────
// ÍCONO GREED MODE — Saco de dinero
// ──────────────────────────────
export const GreedIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Saco */}
    <rect x="5" y="1" width="6" height="2" fill="#8B4513" />
    <rect x="4" y="3" width="8" height="2" fill="#A0522D" />
    <rect x="2" y="5" width="12" height="9" fill="#c4863a" />
    <rect x="3" y="4" width="10" height="10" fill="#d4983a" />
    <rect x="4" y="14" width="8" height="1" fill="#c4863a" />
    {/* $ */}
    <rect x="7" y="7" width="2" height="1" fill="#8B4513" />
    <rect x="6" y="8" width="4" height="1" fill="#8B4513" />
    <rect x="7" y="9" width="2" height="1" fill="#8B4513" />
    <rect x="6" y="10" width="4" height="1" fill="#8B4513" />
    <rect x="7" y="11" width="2" height="1" fill="#8B4513" />
    <rect x="7" y="6" width="2" height="6" fill="none" />
  </svg>
);

// ──────────────────────────────
// ÍCONO CRANE GAME — Garra mecánica
// ──────────────────────────────
export const CraneIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="1" y="1" width="14" height="3" fill="#555" />
    <rect x="7" y="4" width="2" height="7" fill="#888" />
    <rect x="4" y="11" width="3" height="2" fill="#888" />
    <rect x="9" y="11" width="3" height="2" fill="#888" />
    <rect x="6" y="13" width="4" height="2" fill="#666" />
  </svg>
);

// ──────────────────────────────
// ÍCONO BOMB BUM — Bomba
// ──────────────────────────────
export const BombBumIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="3" y="6" width="10" height="9" fill="#2c2c2c" />
    <rect x="2" y="7" width="12" height="7" fill="#2c2c2c" />
    {/* Mecha */}
    <rect x="9" y="3" width="2" height="4" fill="#8B4513" />
    <rect x="11" y="2" width="3" height="2" fill="#8B4513" />
    <rect x="13" y="1" width="2" height="2" fill="#FF6600" />
    {/* Brillo */}
    <rect x="4" y="8" width="3" height="2" fill="#555" />
  </svg>
);

// ──────────────────────────────
// ÍCONO BATTERY BUM — Batería
// ──────────────────────────────
export const BatteryBumIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Cuerpo de la batería */}
    <rect x="1" y="5" width="12" height="7" fill="#27ae60" />
    <rect x="2" y="6" width="10" height="5" fill="#2ecc71" />
    {/* Terminal positivo */}
    <rect x="13" y="7" width="2" height="3" fill="#1e8449" />
    {/* Rayo */}
    <rect x="6" y="7" width="2" height="3" fill="#f5d060" />
    <rect x="7" y="6" width="2" height="5" fill="#f5d060" />
    <rect x="8" y="8" width="2" height="3" fill="#f5d060" />
  </svg>
);

// ──────────────────────────────
// ÍCONO BEGGAR — Mendigo con gorro
// ──────────────────────────────
export const BeggarIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    {/* Gorro */}
    <rect x="4" y="1" width="8" height="4" fill="#8B4513" />
    <rect x="2" y="4" width="12" height="2" fill="#A0522D" />
    {/* Cara */}
    <rect x="4" y="6" width="8" height="7" fill="#f5d5a0" />
    <rect x="3" y="7" width="10" height="5" fill="#f5d5a0" />
    {/* Ojos */}
    <rect x="5" y="8" width="2" height="2" fill="#3d3040" />
    <rect x="9" y="8" width="2" height="2" fill="#3d3040" />
    {/* Boca */}
    <rect x="6" y="11" width="4" height="1" fill="#8B4513" />
  </svg>
);

// ──────────────────────────────
// ÍCONO PERSONALIZADO — Rombo con ?
// Para pools agregadas por el usuario
// ──────────────────────────────
export const CustomPoolIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="7" y="1" width="2" height="2" fill="#8e44ad" />
    <rect x="5" y="3" width="6" height="2" fill="#8e44ad" />
    <rect x="3" y="5" width="10" height="6" fill="#8e44ad" />
    <rect x="5" y="11" width="6" height="2" fill="#8e44ad" />
    <rect x="7" y="13" width="2" height="2" fill="#8e44ad" />
    {/* ? */}
    <rect x="7" y="5" width="2" height="2" fill="#e8d5ff" />
    <rect x="8" y="7" width="1" height="2" fill="#e8d5ff" />
    <rect x="7" y="10" width="2" height="1" fill="#e8d5ff" />
  </svg>
);

// ──────────────────────────────
// ÍCONO "+" para agregar pool
// ──────────────────────────────
export const AddIcon = ({ size = 24, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
    {...props}
  >
    <rect x="7" y="3" width="2" height="10" fill="#888" />
    <rect x="3" y="7" width="10" height="2" fill="#888" />
  </svg>
);
