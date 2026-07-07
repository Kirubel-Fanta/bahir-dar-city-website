import { cn } from "@/lib/utils";

export default function Card({ className, children, hover = true }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-soft overflow-hidden",
        hover && "transition-shadow duration-200 hover:shadow-lifted",
        className
      )}
    >
      {children}
    </div>
  );
}
