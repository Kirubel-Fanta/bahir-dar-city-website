import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <div>
      <PageHeader eyebrow="Get in touch" title="Contact us" subtitle="Questions, corrections, or partnership inquiries — we'd love to hear from you." />
      <div className="container-page grid grid-cols-1 gap-4 py-10 sm:grid-cols-3">
        <Card hover={false} className="flex items-start gap-3 p-5">
          <Mail className="h-5 w-5 shrink-0 text-tana-600" />
          <div>
            <h3 className="font-medium text-stone-900">Email</h3>
            <p className="mt-1 text-sm text-stone-500">hello@bahir-dar-city.com</p>
          </div>
        </Card>
        <Card hover={false} className="flex items-start gap-3 p-5">
          <Phone className="h-5 w-5 shrink-0 text-tana-600" />
          <div>
            <h3 className="font-medium text-stone-900">Phone</h3>
            <p className="mt-1 text-sm text-stone-500">+251 58 220 0000</p>
          </div>
        </Card>
        <Card hover={false} className="flex items-start gap-3 p-5">
          <MapPin className="h-5 w-5 shrink-0 text-tana-600" />
          <div>
            <h3 className="font-medium text-stone-900">Office</h3>
            <p className="mt-1 text-sm text-stone-500">Central Bahir Dar, Ethiopia</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
