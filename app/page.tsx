import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
          src="/mountains.png"
          width={300}
          height={300}
          alt="mountains outline"
        />
      <div className="text-3xl mt-10">
        Whistler Alpine Weather Conditions...
      </div>
    </>
  );
}
