export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <div className="border-b border-stone-200 bg-white py-10 sm:py-14">
      <div className="container-page">
        {eyebrow && <p className="text-sm font-medium uppercase tracking-widest text-tana-600">{eyebrow}</p>}
        <h1 className="mt-2 font-display text-3xl font-semibold text-stone-900 sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-stone-500">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
