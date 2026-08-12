import React from "react";

type Gradient = {
  type?: "linear" | "radial";
  from: string;
  to: string;
  degree?: number;
};

interface FancyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient: Gradient;
}

/**
 * Lightweight drop-in replacement for @carefully-coded/react-text-gradient.
 * Renders static gradient text with plain CSS (background-clip: text)
 * instead of pulling in react-spring's react-native bundle, which drags
 * in metro -> image-size and its DoS advisories for no benefit here.
 */
const FancyText = ({ gradient, style, ...props }: FancyTextProps) => {
  const { type = "linear", from, to, degree = 90 } = gradient;
  const backgroundImage =
    type === "radial"
      ? `radial-gradient(farthest-corner at top, ${from}, ${to})`
      : `linear-gradient(${degree}deg, ${from}, ${to})`;

  return (
    <div
      {...props}
      style={{
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        display: "inline-block",
        backgroundImage,
        ...style,
      }}
    />
  );
};

export default FancyText;
