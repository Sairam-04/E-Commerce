import { formatINRCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const Product = ({ title, id, desc, brand, thumbnail, price }) => {
  return (
    <Link
      href={`/products/${id}`}
      className="sm:w-60 w-[94%] mx-auto flex flex-col shadow-2xl gap-3 p-2 rounded-lg bg-white text-black cursor-pointer hover:scale-105 hover:border-black hover:border"
    >
      <div className="img w-56 h-48">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-lg text-gray-800 font-semibold">{title}</div>
        <div className="text-base">{brand}</div>
        <div className="text-base">₹ {formatINRCurrency(price)}</div>
      </div>
      <div>
        <button className="bg-black text-white rounded px-3 py-1">
          Buy Now
        </button>
      </div>
    </Link>
  );
};

export default Product;
