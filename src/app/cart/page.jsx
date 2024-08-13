"use client"

import Header from "@/components/Header";
import CartProduct from "./components/CartProduct";
import { useSelector } from "react-redux";

const page = () =>{

    const cartData = useSelector((state)=> state.cart.cartItems);
    return(
        <div className="bg-white text-black">
            <Header />
            {
                cartData && cartData.length !== 0 ?  <CartProduct  
                    
                /> : <span className="text-2xl bg-red-600">No Cart Items</span>
            }
            
        </div>
    )
}

export default page;