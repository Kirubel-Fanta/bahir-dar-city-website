import { Check } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = { title: "Premium Listings" };

const perks = [
  "Top placement in your category",
  "Featured on the homepage carousel",
  "Unlimited photo gallery uploads",
  "Respond to reviews directly",
  "Monthly analytics on views and clicks",
  "Priority support",
];

export default function PremiumPage() {
  return (
    <div>
      <PageHeader eyebrow="Business" title="Premium listings" subtitle="Stand out in the Bahir Dar directory." />
      <div className="container-page max-w-xl py-10">
        <Card hover={false} className="p-6">
          <p className="text-3xl font-semibold text-stone-900">
            1,200 ETB<span className="text-base font-normal text-stone-500">/month</span>
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm text-stone-600">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-palm-600" />
                {p}
              </li>
            ))}
          </ul>
          <Button href="/contact" className="mt-6 w-full">Upgrade your listing</Button>
        </Card>
      </div>
    </div>
  );
}
