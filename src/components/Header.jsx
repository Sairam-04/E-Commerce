import Image from "next/image";
import searchicon from "../assets/searchicon.svg";
import logo from "../assets/Logo.svg";
import {
  UserIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex sticky top-0 left-0 justify-between items-center h-[10vh] bg-white z-10 px-5 shadow-lg">
      <Link href="/" className="flex">
        <Image src={logo} alt="logo" width={120} height={50} />
      </Link>
      <Search />
      <NavItems />
      <div className="sm:hidden flex justify-end items-center">
        <Bars3Icon className="size-6 text-black" />
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <form className="sm:w-[30%] w-3/5 mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Image width={25} height={25} alt="seachicon" src={searchicon} />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full sm:p-2.5 placeholder:pl-10 pl-10 p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
          placeholder="Search for Products, Brands and More"
          required
        />
      </div>
    </form>
  );
};

const NavItems = () => {
  return (
    <>
      <ul className="sm:flex hidden gap-x-10 text-black">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">ContactUs</li>
        <li className="cursor-pointer">
          <Link href="/cart" className="flex gap-2 items-center">
            <ShoppingBagIcon className="size-6 text-black" /> Cart
          </Link>
        </li>
        <li className="cursor-pointer">
          <UserIcon className="size-6 text-black" />
        </li>
      </ul>
    </>
  );
};

export default Header;
