import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-tana-600 text-white hover:bg-tana-700 shadow-soft",
  secondary: "bg-white text-stone-900 hover:bg-stone-100 shadow-soft border border-stone-200",
  ghost: "bg-transparent text-stone-700 hover:bg-stone-100",
  sunset: "bg-sunset-500 text-white hover:bg-sunset-600 shadow-soft",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export default function Button({
  as = "button",
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
