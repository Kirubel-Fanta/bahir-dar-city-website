import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Button from "@/components/ui/Button";

export default function CommunityPhotos({ photos }) {
  if (!photos?.length) return null;

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="container-page">
        <SectionHeader title="Community photos" subtitle="Bahir Dar, captured by the people who love it" />
        <div className="masonry-columns">
          {photos.map((p, i) => (
            <div key={p.id} className="masonry-item relative overflow-hidden rounded-xl">
              <Image
                src={p.url}
                alt={p.caption ?? "Bahir Dar community photo"}
                width={400}
                height={400 * (p.height / p.width)}
                className="w-full object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/community/photos/submit" variant="secondary">
            Share your photo
          </Button>
        </div>
      </div>
    </section>
  );
}
