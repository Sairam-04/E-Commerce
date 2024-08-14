import { formatINRCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { discountAmount } from "@/utils/discountAmount";

const CartProduct = ({
  quantity,
  title,
  stock,
  price,
  description,
  thumbnail,
  id,
  addClick,
  subClick,
  discountPercentage,
  item,
  removeItemClick,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-x-6 md:items-center items-start">
      <div className="image w-full md:w-[15%]">
        <Image src={thumbnail} alt="product img" width={100} height={100} />
      </div>
      <div className="flex flex-col gap-3 w-full md:w-[35%]">
        <div className="text-lg font-semibold">{title}</div>
        <div className="font-semibold">{description}</div>
      </div>

      <div className="text-lg flex flex-col gap-2 w-full md:w-[20%] md:items-center mt-4 md:mt-0">
        <span className="text-sm text-green-500">
          {discountPercentage}% Off
        </span>
        <span className="line-through opacity-25">
          ₹ {formatINRCurrency(quantity * price)}
        </span>
        <span>
          ₹{" "}
          {formatINRCurrency(
            discountAmount(quantity * price, discountPercentage)
          )}
        </span>
      </div>
      <div className="flex gap-2 items-center w-full md:w-[20%] md:justify-between mt-4 md:mt-0">
        <button
          className="text-lg w-8 h-8 bg-zinc-300 rounded-full flex justify-center items-center"
          onClick={() => subClick(item)}
        >
          -
        </button>
        <div>
          <input
            type="text"
            name="count"
            id="quantity"
            className="w-10 px-2 py-1 text-center border border-black"
            value={quantity}
          />
        </div>
        <button
          onClick={() => addClick(item)}
          disabled={quantity + 1 === stock}
          className="disabled:opacity-20 disabled:cursor-not-allowed text-lg w-8 h-8 bg-zinc-300 rounded-full flex justify-center items-center"
        >
          +
        </button>
      </div>
      <div className="md:w-[10%] flex md:justify-end mt-4 md:mt-0">
        <button onClick={() => removeItemClick({ id }, title)}>
          <XCircleIcon className="md:block hidden size-8 text-red-500" />
          <span className="md:hidden block bg-red-500 text-white px-4 py-1.5 rounded">
            Remove Item
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
