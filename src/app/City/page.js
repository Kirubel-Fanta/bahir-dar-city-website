import Image from "next/image";

const highlights = [
  {
    title: "Monasteries",
    description:
      "Unveiling the mysteries of Ethiopia's rich past, Bahir Dar's historic monasteries, like the 14th-century Gebriel Monastery, stand sentinel on mystical islands dotting Lake Tana. Explore these architectural gems by boat, each boasting intricate murals and religious treasures.",
    image: "/static/media/monastries.jpg",
  },
  {
    title: "Blue Nile Falls",
    description:
      "Experience the breathtaking grandeur of Ethiopia's Blue Nile Falls, the source of the legendary Nile River. Powerful cascades roar over a dramatic cliff, offering a profound connection to the natural world.",
    image: "/static/media/Bahir-dar-5.jpg",
  },
  {
    title: "Lodges",
    description:
      "Charming lodges with traditional Ethiopian architecture and breathtaking lakefront views offer a haven for relaxation, with spa treatments and coffee ceremonies.",
    image: "/static/media/kuriftu.jpg",
  },
  {
    title: "Boat ride on Lake Tana",
    description:
      "Discover ancient monasteries on tranquil islands, observe diverse birdlife, and enjoy the stunning scenery on a boat trip across Lake Tana, the source of the Blue Nile.",
    image: "/static/media/boat-ride.jpg",
  },
  {
    title: "Traditional dance shows",
    description:
      "Immerse yourself in lively performances that showcase Ethiopia's rich heritage through music, dance, and colorful costumes.",
    image: "/static/media/Checheho.jpg",
  },
];

export default function City() {
  return (
    <div>
      <div className="relative h-72 w-full sm:h-96">
        <Image src="/static/media/Bahir-dar-1.jpg" alt="Bahir Dar City" fill className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-950/50 text-center text-white">
          <h1 className="font-display text-3xl font-semibold sm:text-5xl">Bahir Dar City</h1>
          <p className="mt-2 text-stone-100/90">Ethiopia&apos;s breathtaking lakeside paradise</p>
        </div>
      </div>

      <div className="container-page py-12">
        <p className="max-w-3xl text-stone-600">
          Kickstart your Ethiopian adventure in Bahir Dar, a captivating town nestled on the shores of Lake Tana, the
          country&apos;s largest lake. Often the gateway to Ethiopia&apos;s historical north, Bahir Dar offers a
          delightful escape. Immerse yourself in tranquility with a boat trip on Lake Tana, explore the archipelago of
          ancient monasteries, and witness the majestic Blue Nile Falls.
        </p>

        <h2 className="mt-12 mb-6 font-display text-2xl font-semibold text-stone-900">What to visit in Bahir Dar</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {highlights.map((h) => (
            <div key={h.title} className="overflow-hidden rounded-2xl bg-white shadow-soft">
              <div className="relative h-56 w-full">
                <Image src={h.image} alt={h.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-medium text-stone-900">{h.title}</h3>
                <p className="mt-2 text-sm text-stone-500">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
