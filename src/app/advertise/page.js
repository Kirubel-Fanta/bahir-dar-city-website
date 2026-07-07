import PageHeader from "@/components/layout/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = { title: "Advertise" };

const options = [
  { title: "Homepage banner", description: "Prime placement on the most-visited page in Bahir Dar's digital home." },
  { title: "Sponsored listing", description: "Feature your business at the top of directory and search results." },
  { title: "Sponsored event", description: "Boost visibility for your event on the homepage and events calendar." },
  { title: "Newsletter sponsorship", description: "Reach subscribers directly with a dedicated placement." },
];

export default function AdvertisePage() {
  return (
    <div>
      <PageHeader eyebrow="Business" title="Advertise with us" subtitle="Reach residents, tourists, and the diaspora across Bahir Dar's most visited platform." />
      <div className="container-page py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {options.map((o) => (
            <Card key={o.title} hover={false} className="p-5">
              <h3 className="font-medium text-stone-900">{o.title}</h3>
              <p className="mt-1 text-sm text-stone-500">{o.description}</p>
            </Card>
          ))}
        </div>
        <Button href="/contact" className="mt-8">Get in touch</Button>
      </div>
    </div>
  );
}
