import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Link from "next/link";
import productsData from "../data/products.json";


export default function Home() {
  const products = productsData.slice(0, 12);
  return (
    <div className="w-full bg-slate-100 relative">
      <Header />
      <Hero />
      <div>
        <div className="w-4/5 mx-auto text-2xl font-semibold py-4 text-gray-500">
          Featured Products
        </div>
        <Products products={products} />
        <div className="text-center py-6">
          <Link href="/products" className="bg-black px-4 py-3 rounded">
            View More Products
          </Link>
        </div>
      </div>
    </div>
  );
}
