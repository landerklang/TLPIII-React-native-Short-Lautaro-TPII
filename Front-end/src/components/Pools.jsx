export const DEFAULT_POOLS = [
  {
    id: "treasure",
    name: "Treasure Room",
    // Cofre con estrella — sala del tesoro, la más común
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="14"
          width="24"
          height="14"
          rx="2"
          fill="#8B6914"
          stroke="#5a4209"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="10"
          width="24"
          height="6"
          rx="2"
          fill="#B8860B"
          stroke="#5a4209"
          strokeWidth="1.5"
        />
        <rect
          x="13"
          y="13"
          width="6"
          height="4"
          rx="1"
          fill="#FFD700"
          stroke="#B8860B"
          strokeWidth="1"
        />
        <path
          d="M16 4 L17.5 9 L22 9 L18.5 12 L20 17 L16 14 L12 17 L13.5 12 L10 9 L14.5 9 Z"
          fill="#FFD700"
          stroke="#B8860B"
          strokeWidth="0.5"
        />
      </svg>
    ),
  },
  {
    id: "devil",
    name: "Devil Room",
    // Símbolo del diablo — cuernos y cara
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="16"
          cy="18"
          r="10"
          fill="#c0392b"
          stroke="#7B241C"
          strokeWidth="1.5"
        />
        <path
          d="M8 10 L6 3 L12 9"
          fill="#c0392b"
          stroke="#7B241C"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 10 L26 3 L20 9"
          fill="#c0392b"
          stroke="#7B241C"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="18" r="2" fill="#1a0000" />
        <circle cx="20" cy="18" r="2" fill="#1a0000" />
        <path
          d="M12 24 Q16 21 20 24"
          stroke="#1a0000"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "angel",
    name: "Angel Room",
    // Halo y alas — sala del ángel
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="16"
          cy="7"
          rx="6"
          ry="3"
          fill="none"
          stroke="#FFD700"
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="18"
          r="7"
          fill="#e8d5a3"
          stroke="#c4a84f"
          strokeWidth="1.5"
        />
        <path
          d="M4 16 Q8 10 9 18"
          fill="#d4c4e8"
          stroke="#9b8abf"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path
          d="M28 16 Q24 10 23 18"
          fill="#d4c4e8"
          stroke="#9b8abf"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="17" r="1.5" fill="#4a3520" />
        <circle cx="19" cy="17" r="1.5" fill="#4a3520" />
        <path
          d="M13 22 Q16 24 19 22"
          stroke="#4a3520"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "secret",
    name: "Secret Room",
    // Signo de interrogación — sala secreta
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="3"
          fill="#2c3e50"
          stroke="#1a252f"
          strokeWidth="1.5"
        />
        <text
          x="16"
          y="23"
          textAnchor="middle"
          fill="#95a5a6"
          fontSize="18"
          fontFamily="serif"
          fontWeight="bold"
        >
          ?
        </text>
      </svg>
    ),
  },
  {
    id: "shop",
    name: "Shop",
    // Moneda — tienda
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="#F39C12"
          stroke="#B7770D"
          strokeWidth="1.5"
        />
        <circle
          cx="16"
          cy="16"
          r="9"
          fill="#F1C40F"
          stroke="#B7770D"
          strokeWidth="0.8"
        />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fill="#8B6914"
          fontSize="14"
          fontFamily="serif"
          fontWeight="bold"
        >
          $
        </text>
      </svg>
    ),
  },
  {
    id: "boss",
    name: "Boss Room",
    // Calavera con corona — sala de boss
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 8 L8 4 L12 7 L16 3 L20 7 L24 4 L26 8"
          stroke="#c0392b"
          strokeWidth="2"
          fill="none"
          strokeLinejoin="round"
        />
        <ellipse
          cx="16"
          cy="18"
          rx="10"
          ry="10"
          fill="#e8e0d0"
          stroke="#8B7355"
          strokeWidth="1.5"
        />
        <rect x="11" y="23" width="4" height="5" rx="1" fill="#8B7355" />
        <rect x="17" y="23" width="4" height="5" rx="1" fill="#8B7355" />
        <circle cx="12" cy="16" r="3" fill="#2c2c2c" />
        <circle cx="20" cy="16" r="3" fill="#2c2c2c" />
        <path
          d="M13 21 Q16 23 19 21"
          stroke="#8B7355"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "curse",
    name: "Curse Room",
    // Llamas — sala maldita
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 28 Q8 22 8 14 Q8 8 12 6 Q11 10 14 12 Q13 8 16 4 Q19 8 18 12 Q21 10 20 6 Q24 8 24 14 Q24 22 16 28Z"
          fill="#e74c3c"
          stroke="#922b21"
          strokeWidth="0.8"
        />
        <path
          d="M16 26 Q10 20 10 14 Q11 12 13 13 Q13 10 15 8 Q16 10 16 13 Q18 11 18 8 Q21 11 22 14 Q22 20 16 26Z"
          fill="#f39c12"
        />
        <path
          d="M16 22 Q12 18 13 14 Q15 16 16 14 Q17 16 19 14 Q20 18 16 22Z"
          fill="#FFD700"
        />
      </svg>
    ),
  },
  {
    id: "library",
    name: "Library",
    // Libro abierto — biblioteca
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 8 L16 6 L28 8 L28 26 L16 24 L4 26 Z"
          fill="#8B4513"
          stroke="#5D2E0C"
          strokeWidth="1"
        />
        <path d="M16 6 L16 24" stroke="#5D2E0C" strokeWidth="1.5" />
        <path
          d="M6 11 L14 10"
          stroke="#D4A96A"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M6 14 L14 13"
          stroke="#D4A96A"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M6 17 L14 16"
          stroke="#D4A96A"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M18 10 L26 11"
          stroke="#D4A96A"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M18 13 L26 14"
          stroke="#D4A96A"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M18 16 L26 17"
          stroke="#D4A96A"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "golden_chest",
    name: "Golden Chest",
    // Cofre dorado brillante
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="15"
          width="24"
          height="13"
          rx="2"
          fill="#DAA520"
          stroke="#8B6914"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="10"
          width="24"
          height="7"
          rx="2"
          fill="#FFD700"
          stroke="#8B6914"
          strokeWidth="1.5"
        />
        <rect
          x="13"
          y="14"
          width="6"
          height="4"
          rx="1"
          fill="#FFF8DC"
          stroke="#DAA520"
          strokeWidth="1"
        />
        <path d="M8 15 L24 15" stroke="#8B6914" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "red_chest",
    name: "Red Chest",
    // Cofre rojo — contiene items malditos
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="4"
          y="15"
          width="24"
          height="13"
          rx="2"
          fill="#8B0000"
          stroke="#5D0000"
          strokeWidth="1.5"
        />
        <rect
          x="4"
          y="10"
          width="24"
          height="7"
          rx="2"
          fill="#B22222"
          stroke="#5D0000"
          strokeWidth="1.5"
        />
        <rect
          x="13"
          y="14"
          width="6"
          height="4"
          rx="1"
          fill="#FF6B6B"
          stroke="#8B0000"
          strokeWidth="1"
        />
        <path d="M8 15 L24 15" stroke="#5D0000" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "greed",
    name: "Greed Mode",
    // Moneda con G de greed
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="#8B4513"
          stroke="#5D2E0C"
          strokeWidth="1.5"
        />
        <circle cx="16" cy="16" r="9" fill="#A0522D" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fill="#FFD700"
          fontSize="13"
          fontFamily="serif"
          fontWeight="bold"
        >
          G
        </text>
      </svg>
    ),
  },
  {
    id: "crane",
    name: "Crane Game",
    // Garra de máquina
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="13"
          y="4"
          width="6"
          height="12"
          rx="1"
          fill="#888"
          stroke="#555"
          strokeWidth="1"
        />
        <path
          d="M10 16 L13 16 L16 20 L19 16 L22 16"
          fill="none"
          stroke="#888"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="4"
          width="24"
          height="4"
          rx="1"
          fill="#555"
          stroke="#333"
          strokeWidth="1"
        />
        <rect
          x="6"
          y="20"
          width="20"
          height="8"
          rx="2"
          fill="#2c3e50"
          stroke="#1a252f"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    id: "bomb_bum",
    name: "Bomb Bum",
    // Bomba — del mendigo de bombas
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="15"
          cy="19"
          r="10"
          fill="#2c2c2c"
          stroke="#1a1a1a"
          strokeWidth="1.5"
        />
        <path
          d="M20 10 Q24 6 27 8"
          stroke="#B8860B"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="27" cy="7" r="2" fill="#FF6600" />
        <circle cx="11" cy="16" r="2.5" fill="#555" />
      </svg>
    ),
  },
  {
    id: "battery_bum",
    name: "Battery Bum",
    // Batería — del mendigo de baterías
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="6"
          y="10"
          width="20"
          height="12"
          rx="2"
          fill="#27ae60"
          stroke="#1e8449"
          strokeWidth="1.5"
        />
        <rect x="22" y="13" width="4" height="6" rx="1" fill="#1e8449" />
        <path
          d="M14 14 L12 18 L16 18 L14 22"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];
