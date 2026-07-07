import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

export const metadata = { title: "Emergency Contacts" };

const contacts = [
  { name: "Police", number: "911" },
  { name: "Ambulance", number: "907" },
  { name: "Fire Department", number: "939" },
  { name: "Felege Hiwot Referral Hospital", number: "+251 58 220 1122" },
  { name: "Tana Hospital", number: "+251 58 220 3344" },
  { name: "Traffic Police (Bahir Dar)", number: "+251 58 220 5566" },
];

export default function EmergencyPage() {
  return (
    <div>
      <PageHeader eyebrow="Safety" title="Emergency contacts" subtitle="Keep these numbers on hand." />
      <div className="container-page grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) => (
          <Card key={c.name} hover={false} className="p-5">
            <h3 className="font-medium text-stone-900">{c.name}</h3>
            <p className="mt-1 text-lg font-semibold text-tana-700">{c.number}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
