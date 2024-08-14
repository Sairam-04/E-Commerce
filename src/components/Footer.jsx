import Link from "next/link";

const Footer = () =>{
    return(
        <div className="w-full md:flex-row flex flex-col gap-3 items-center justify-between p-4 bg-black text-white">
            <div className="flex items-center gap-x-3">
                <span>©</span>
                <span>StoreVilla.</span>
                <span>All Rights Reserved</span>
            </div>
            <div className="flex gap-x-3">
                <Link href="/">
                    Home
                </Link>
                <span>|</span>
                <Link href="/products">
                    Products
                </Link>
                <span>|</span>
                <Link href="/cart">
                    Cart
                </Link>
            </div>

        </div>
    )
}

export default Footer;