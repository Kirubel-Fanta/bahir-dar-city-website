import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

export const metadata = { title: "Government" };

const offices = [
  { name: "Bahir Dar City Administration", description: "Municipal services, permits, and civic records." },
  { name: "Amhara Regional State Bureau", description: "Regional government offices serving Bahir Dar." },
  { name: "Bahir Dar Revenue Office", description: "Tax registration and business licensing." },
  { name: "Land Administration Office", description: "Property registration and land-use permits." },
];

export default function GovernmentPage() {
  return (
    <div>
      <PageHeader eyebrow="Civic" title="Government" subtitle="Municipal and regional offices serving Bahir Dar residents." />
      <div className="container-page grid grid-cols-1 gap-4 py-10 sm:grid-cols-2">
        {offices.map((o) => (
          <Card key={o.name} hover={false} className="p-5">
            <h3 className="font-medium text-stone-900">{o.name}</h3>
            <p className="mt-1 text-sm text-stone-500">{o.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
