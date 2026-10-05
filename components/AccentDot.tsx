import { defaultConfig } from "@/lib/site-config";

type DotColor = "orange" | "blue" | "green";

const colorMap: Record<DotColor, string> = {
  orange: defaultConfig.colors.accent.orange,
  blue: defaultConfig.colors.accent.blue,
  green: defaultConfig.colors.accent.green,
};

export default function AccentDot({ color, size = "sm" }: { color: DotColor; size?: "sm" | "md" | "lg" }) {
  const sizeClass = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4",
  }[size];

  return (
    <div
      className={`${sizeClass} rounded-full shrink-0`}
      style={{ backgroundColor: colorMap[color] }}
      aria-hidden="true"
    />
  );
}
