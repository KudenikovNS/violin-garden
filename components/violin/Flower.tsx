import styles from "./Flower.module.css";

// Paleta cvetnih barv, ki sledi toplemu zlato-rožnatemu slogu strani.
const PALETTE = [
  { petal: "#bf8f8c", petalDark: "#a8736f", center: "#d8b46a" },
  { petal: "#c6a163", petalDark: "#a8854a", center: "#bf8f8c" },
  { petal: "#a7ad8a", petalDark: "#868c68", center: "#d8b46a" },
  { petal: "#cba0a8", petalDark: "#b07f88", center: "#c6a163" },
  { petal: "#d3b87e", petalDark: "#b9995c", center: "#bf6f6c" },
  { petal: "#b08f9e", petalDark: "#947483", center: "#d8b46a" },
];

export default function Flower({
  variant = 0,
  size = 160,
  className = "",
}: {
  variant?: number;
  size?: number;
  className?: string;
}) {
  const c = PALETTE[variant % PALETTE.length];
  const petals = 8;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${styles.flower} ${className}`}
      role="img"
      aria-hidden="true"
    >
      <g transform="translate(50 50)">
        {Array.from({ length: petals }).map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-26"
            rx="11"
            ry="22"
            fill={i % 2 === 0 ? c.petal : c.petalDark}
            transform={`rotate(${(360 / petals) * i})`}
            opacity="0.92"
          />
        ))}
        <circle cx="0" cy="0" r="14" fill={c.center} />
        <circle cx="0" cy="0" r="7" fill="#fdfaf3" opacity="0.65" />
      </g>
    </svg>
  );
}
