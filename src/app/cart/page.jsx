"use client";

import Header from "@/components/Header";
import productData from "@/data/products.json"
import CartProduct from "./components/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import {
    addItem,
  addQuantity,
  removeItem,
  subQuantity,
} from "../lib/features/cart/cartSlice";
import OrderSummary from "./components/OrderSummary";
import { useEffect } from "react";

const page = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartItems);
  const addClick = (item) => {
    dispatch(addQuantity(item));
  };
  const subClick = (item) => {
    dispatch(subQuantity(item));
  };
  const removeItemClick = (id) => {
    dispatch(removeItem(id));
  };

//   useEffect(()=>{
//     for(let i=0;i<10;i++){
//         dispatch(addItem(productData[0]))
//     }
//   }, [])


  return (
    <div className="bg-white h-[90vh] w-full overflow-y-auto text-black">
      <div className="flex sm:flex-row flex-col w-[90%] mx-auto my-6">
        <div className="sm:w-1/2 w-full sm:p-0 p-3 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-xl">Shopping Cart</span>
            <button className="px-4 py-1 bg-red-500 text-white rounded">
              {" "}
              Clear Cart
            </button>
          </div>
          <div className="sm:h-[75vh] h-fit sm:overflow-y-auto">
            {cartData && cartData.length !== 0 ? (
              cartData.map((item) => (
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
              ))
            ) : (
              <span className="text-2xl bg-red-600">No Cart Items</span>
            )}
          </div>
        </div>
        <div className="sm:w-2/5 w-full h-fit mx-auto">
          <OrderSummary items={(cartData && cartData) || []} />
        </div>
      </div>
    </div>
  );
};

export default page;
