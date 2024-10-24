import gambar1 from "@/public/images/assets/1.jpg";
import Picture from "./picture";
import { PictureProps } from "./picture";
import gambar2 from "@/public/images/assets/2.jpg";
import gambar3 from "@/public/images/assets/3.jpg";
import gambar4 from "@/public/images/assets/4.jpg";

const galery: PictureProps[] = [
  {
    src: gambar1,
    alt: "Galery",
  },
  {
    src: gambar2,
    alt: "Galery",
  },
  {
    src: gambar3,
    alt: "Galery",
  },
  {
    src: gambar4,
    alt: "Galery",
  },
];

export default function LargeTestimonial() {
  return (
    <section id="galery">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
            </div>
            {/* Galery */}
            <div className="grid grid-cols-2 gap-4 w-full items-center">
              {galery.map((item, index) => (
                <Picture key={index} src={item.src} alt={item.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
