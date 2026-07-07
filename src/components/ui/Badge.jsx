import { cn } from "@/lib/utils";

const tones = {
  neutral: "bg-stone-100 text-stone-700",
  open: "bg-palm-100 text-palm-800",
  closed: "bg-red-100 text-red-700",
  sunset: "bg-sunset-100 text-sunset-800",
  tana: "bg-tana-100 text-tana-800",
};

export default function Badge({ tone = "neutral", className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
