import Image from "next/image";

const photos = [
  "/static/media/Bahir-dar-1.jpg",
  "/static/media/Bahir-dar-2.jpg",
  "/static/media/Bahir-dar-3.jpg",
  "/static/media/Bahir-dar-4.jpg",
  "/static/media/Bahir-dar-5.jpg",
  "/static/media/Bahir-dar-6.jpg",
  "/static/media/Bahir-dar-7.jpg",
  "/static/media/Bahir-dar-8.jpg",
  "/static/media/Bahir-dar-9.jpg",
  "/static/media/Bahir-dar-10.jpg",
  "/static/media/Bahir-dar-11.jpg",
];

export default function Pictures() {
  return (
    <div className="container-page py-14">
      <h1 className="mb-6 font-display text-3xl font-semibold text-stone-900">Bahir Dar in pictures</h1>
      <div className="masonry-columns">
        {photos.map((src) => (
          <div key={src} className="masonry-item overflow-hidden rounded-xl">
            <Image src={src} alt="Bahir Dar" width={500} height={500} className="w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
