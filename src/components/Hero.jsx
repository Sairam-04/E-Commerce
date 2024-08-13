import Image from "next/image";
import HeroImg from "../assets/HeroImg.svg";
const Hero = () => {
  return (
    <div className="w-full h-[70vh] bg-gradient-to-r from-zinc-900 to-zinc-800">
      <div className="sm:w-4/5 w-full h-full mx-auto flex">
        <div className="sm:w-1/2 w-full h-full flex flex-col gap-4 justify-center text-center sm:text-left">
          <div className="text-4xl text-gray-400 font-semibold">Welcome to ShopVerse</div>
          <div className="text-base text-gray-200 w-[90%] sm:w-full mx-auto">
            Discover a universe of shopping possibilities with ShopVerse, where
            innovation meets convenience. We offer a diverse range of products,
            from the latest tech gadgets to timeless fashion pieces, all
            carefully curated to meet your lifestyle needs.
          </div>
          <div className="py-4">
            <button className="bg-none border-white shadow-2xl text-sm border px-8 py-3 rounded">Shop Now</button>
          </div>
        </div>
        <div className="w-[40%] h-full sm:flex hidden items-end justify-end relative">
          <Image src={HeroImg} alt="HeroImg" width={350} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
