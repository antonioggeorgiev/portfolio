import Image from "next/image";
import MeInfo from "./MeInfo";

export default function MeSection() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex h-full w-1/2 items-center justify-center">
        <Image
          src="/me.png"
          alt="Antonio Georgiev"
          width={0}
          height={0}
          sizes="100%"
          className="h-full w-auto object-contain"
        />
      </div>
      <div className="flex h-full w-1/2 max-w-[700px] items-center justify-center">
        <MeInfo />
      </div>
    </div>
  );
}
