import { useMemo } from "react";
import { FINGERPRINT_SIZE, hexToBits } from "@/lib/fingerprint";

type Props = {
  hex: string;
  // How many cells (in reading order) are drawn; defaults to all 256.
  revealed?: number;
  className?: string;
  label?: string;
};

export default function Fingerprint({ hex, revealed = FINGERPRINT_SIZE ** 2, className, label }: Props) {
  const bits = useMemo(() => hexToBits(hex), [hex]);
  return (
    <svg
      className={className}
      viewBox={`0 0 ${FINGERPRINT_SIZE} ${FINGERPRINT_SIZE}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      shapeRendering="crispEdges"
    >
      {bits.map((on, i) => {
        const x = i % FINGERPRINT_SIZE;
        const y = Math.floor(i / FINGERPRINT_SIZE);
        const shown = i < revealed;
        return (
          <rect
            key={i}
            x={x + 0.08}
            y={y + 0.08}
            width={0.84}
            height={0.84}
            className={on && shown ? "fp-on" : "fp-off"}
          />
        );
      })}
    </svg>
  );
}
