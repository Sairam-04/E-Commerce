"use client";
import Image from "next/image";
import logo from "../assets/Logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import SearchContext from "@/app/lib/context/SearchContext";
import { useRouter } from "next/navigation";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const [openNav, setOpenNav] = useState(false);
  const openHamburger = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="flex sticky top-0 left-0 justify-between items-center h-[10vh] bg-white z-10 px-5 shadow-lg">
      <Link href="/" className="flex gap-2 items-center">
        <Image src={logo} alt="logo" width={40} height={40} />
        <span className="text-black text-xl font-bold">StoreVilla</span>
      </Link>
      <div className="sm:block hidden w-2/5">
        <Search />
      </div>
      <NavItems />
      <div className="sm:hidden flex gap-4">
        <Link href="/cart" className="flex gap-2 items-center">
          <span className="relative z-10">
            <ShoppingBagIcon
              className={`size-6 transition-colors delay-75 ${
                cartItems && cartItems.length >= 1
                  ? "text-green-500"
                  : "text-black"
              }`}
            />
            {cartItems && cartItems.length >= 1 && (
              <span className="absolute -z-10 -top-3 -right-3 text-sm bg-green-500 text-white rounded-full w-5 flex justify-center items-center h-5">
                {cartItems && cartItems.length}
              </span>
            )}
          </span>
        </Link>
        <Bars3Icon className="size-6 text-black" onClick={openHamburger} />
        {openNav && <NavHamMenu openHamburger={openHamburger} />}
      </div>
    </div>
  );
};

const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  const router = useRouter();
  const handleChange = (e) =>{
    setSearch(e.target.value)
    router.push("/products")
  }
  return (
    <div className="relative flex items-center w-full h-10 rounded-lg shadow-sm bg-gray-100 overflow-hidden">
      <div className="grid place-items-center h-full w-12 text-gray-300">
        <MagnifyingGlassIcon className="size-6 text-black" />
      </div>

      <input
        className="h-full bg-gray-100 w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        value={search}
        onChange={handleChange}
        placeholder="Search for Products"
      />
    </div>
  );
};

const NavItems = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <>
      <ul className="sm:flex hidden gap-x-10 text-black">
        <NavList />
        <li className="cursor-pointer">
          <Link href="/cart" className="flex gap-2 items-center">
            <span className="relative z-10">
              <ShoppingBagIcon
                className={`size-6 transition-colors delay-75 ${
                  cartItems && cartItems.length >= 1
                    ? "text-green-500"
                    : "text-black"
                }`}
              />
              {cartItems && cartItems.length >= 1 && (
                <span className="absolute -z-10 -top-3 -right-3 text-sm bg-green-500 text-white rounded-full w-5 flex justify-center items-center h-5">
                  {cartItems && cartItems.length}
                </span>
              )}
            </span>{" "}
            Cart
          </Link>
        </li>
        <li className="cursor-pointer">
          <UserIcon className="size-6 text-black" />
        </li>
      </ul>
    </>
  );
};

const NavList = ({ openHamburger }) => {
  return (
    <>
      <li className="cursor-pointer" onClick={openHamburger}>
        <Link href="/" className="hover:text-semibold hover:text-gray-700">
          Home
        </Link>
      </li>
      <li className="cursor-pointer" onClick={openHamburger}>
        <Link href="/products" className="hover:text-semibold hover:text-gray-700">
          Products
        </Link>
      </li>
      
    </>
  );
};

const NavHamMenu = ({ openHamburger }) => {
  return (
    <div className="w-4/5 bg-gray-300 rounded pt-2 pb-4 px-2 flex flex-col absolute top-14 right-2">
      <div onClick={openHamburger} className="flex justify-end py-2">
        <XMarkIcon className="size-6 text-black hover:text-red-500" />
      </div>
      <div className="py-2">
        <Search />
      </div>
      <div className="flex flex-col gap-3 list-none">
        <NavList openHamburger={openHamburger} />
      </div>
    </div>
  );
};

export default Header;
