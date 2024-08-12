import Image from "next/image";
import searchicon from "../assets/searchicon.svg";
import logo from "../assets/Logo.svg";
import {UserIcon, ShoppingBagIcon} from "@heroicons/react/24/solid"


const Header = () => {
  return (
    <div className="flex justify-between items-center h-[10vh] px-5">
      <div className="flex">
        <Image src={logo} alt="logo" width={120} height={50} />
      </div>
      <Search />
      <NavItems />
    </div>
  );
};

const Search = () => {
  return (
    <form class="w-[30%] mx-auto">
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Image width={25} height={25} alt="seachicon" src={searchicon} />
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
          placeholder="Search for Products, Brands and More"
          required
        />
      </div>
    </form>
  );
};

const NavItems = () =>{
    return(
        <ul className="flex gap-x-10 text-black">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">ContactUs</li>
            <li className="cursor-pointer flex gap-2 items-center"><ShoppingBagIcon className="size-6 text-black" /> Cart</li>
            <li className="cursor-pointer"><UserIcon className="size-6 text-black" /></li>
        </ul>
    )
}

export default Header;
