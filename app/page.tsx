import Image from "next/image";
import Typewriter from "./ui/typewriter/typewriter";
import Link from "next/link";

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
        <Typewriter text="Whistler Alpine Weather Conditions..."/>
      </div>
      <form className="mt-10">
        <Link href="/forecast">
          <button className="bg-blue-600 text-white px-4 py-8 rounded-2xl max-w-64 hover:bg-blue-800 hover:scale-105 transition delay-100 duration-300">
            Click Here To Select Your Forecast
          </button>
        </Link>
      </form>
    </>
  );
}
