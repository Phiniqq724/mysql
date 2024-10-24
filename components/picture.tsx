import React from "react";
import Image from "next/image";

export interface PictureProps {
  src: any;
  alt: string;
  classname?: string;
}

export default function Picture({ src, alt, classname }: PictureProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`hover:scale-105 duration-500 relative shadow-md shadow-gray-300 rounded-lg max-w-[400px] w-full  ${classname}`}
    />
  );
}
