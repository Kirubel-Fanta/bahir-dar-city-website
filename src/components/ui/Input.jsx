import { cn } from "@/lib/utils";

export default function Input({ label, id, className, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-stone-700">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "h-11 rounded-xl border border-stone-200 bg-white px-4 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition-colors focus:border-tana-500",
          className
        )}
        {...props}
      />
    </div>
  );
}
