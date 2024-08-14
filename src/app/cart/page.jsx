"use client";

import Header from "@/components/Header";
import productData from "@/data/products.json";
import CartProduct from "./components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../assets/EmptyCart.svg";
import {
  addQuantity,
  clearCart,
  removeItem,
  subQuantity,
} from "../lib/features/cart/cartSlice";
import OrderSummary from "./components/OrderSummary";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartItems);
  const addClick = (item) => {
    dispatch(addQuantity(item));
  };
  const subClick = (item) => {
    dispatch(subQuantity(item));
  };
  const removeItemClick = (id, title) => {
    dispatch(removeItem(id));
    toast.success(`Removed Item ${title}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
    });
  };

  const clearCartItems = () =>{
    dispatch(clearCart());
    toast.success(`Cart is Cleared`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
    });
  }

  return (
    <div className="bg-white h-[90vh] w-full overflow-y-auto text-black">
      <div className="flex sm:flex-row flex-col w-[90%] mx-auto my-6">
        {cartData && cartData.length >= 1 ? (
          <>
            <div className="sm:w-1/2 w-full sm:p-0 p-3 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-xl">Shopping Cart</span>
                <button onClick={clearCartItems} className="px-4 py-1 bg-red-500 text-white rounded">
                  Clear Cart
                </button>
              </div>
              <div className="sm:h-[75vh] flex flex-col gap-2 h-fit sm:overflow-y-auto">
                {cartData.map((item) => (
                  <div className="flex flex-col gap-3" key={item?.id}>
                    <CartProduct
                      id={item?.id}
                      title={item?.title}
                      thumbnail={item?.thumbnail}
                      description={item?.description}
                      price={item?.price}
                      stock={item?.stock}
                      quantity={item?.quantity}
                      addClick={addClick}
                      subClick={subClick}
                      discountPercentage={item?.discountPercentage}
                      item={item}
                      removeItemClick={removeItemClick}
                    />
                    <hr />
                  </div>
                ))}
                <div>
                <Link href="/products" className="px-4 py-2 my-3 bg-black text-white rounded">Add More Products</Link>

                </div>
              </div>
            </div>
            <div className="sm:w-2/5 w-full h-fit mx-auto">
              <OrderSummary items={(cartData && cartData) || []} />
            </div>
          </>
        ) : (
          <div className="flex w-full flex-col text-center items-center gap-4">
            <Image src={emptyCart} height={600} width={400} alt="EmptyCart" />
            <div>
              <Link
                href="/products"
                className="px-6 py-3 bg-black text-white rounded"
              >
                Go To Shop
              </Link>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default page;
