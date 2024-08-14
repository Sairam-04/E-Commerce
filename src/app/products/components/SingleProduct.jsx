import { formatINRCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import ProductDetailsDesc from "./ProductDetailsDesc";
import { useDispatch } from "react-redux";
import { addItem } from "@/app/lib/features/cart/cartSlice";
import { discountAmount } from "@/utils/discountAmount";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SingleProduct = ({
  images,
  title,
  description,
  categories,
  price,
  rating,
  fulldesc,
  details,
  thumbnail,
  discountPercentage,
  id,
  stock,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartData = {
    thumbnail,
    title,
    description,
    price,
    id,
    stock,
    discountPercentage,
    quantity: 1,
  };
  const [selectedImg, setSelectedImg] = useState(0);
  const changeImg = (index) => {
    setSelectedImg(index);
  };
  const cateogies_keys = categories?.keys;
  const initialCategory = cateogies_keys.includes("colors") && {
    colors: categories.colors[0],
  };
  const updatedCategory = cateogies_keys.includes("sizes") && {
    ...initialCategory,
    sizes: categories.sizes[0],
  };
  const [selected, setSelected] = useState(updatedCategory);

  const handleSelect = (category, item) => {
    setSelected((prev) => ({ ...prev, [category]: item }));
  };

  const addToCart = (item) => {
    dispatch(addItem(item));
    toast.success(`${item.title} added to the Cart`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
    });
    const timeoutId = setTimeout(() => {
      router.push("/cart");
    }, 4000); 
  
    return () => clearTimeout(timeoutId);
  };
  return (
    <div className="w-full flex-col sm:p-0 p-2">
      <div className="flex sm:flex-row flex-col sm:w-4/5 w-full bg-white mx-auto my-7">
        <div className="flex gap-4 sm:w-2/5 w-full">
          <div className="flex flex-col sm:w-[20%] w-[30%] gap-5">
            {images &&
              images.map((ele, index) => (
                <img
                  onClick={() => changeImg(index)}
                  key={ele}
                  src={ele}
                  className={`rounded-md cursor-pointer w-16 h-16 object-cover ${
                    selectedImg === index ? "border border-black p-1" : ""
                  }`}
                />
              ))}
          </div>
          <div className="sm:w-[80%] w-[70%]">
            <img
              src={images && images[selectedImg]}
              className="w-full object-cover"
              alt="img"
            />
          </div>
        </div>
        <div className="sm:w-3/5 w-full flex flex-col gap-3 p-2">
          <div className="font-bold text-2xl">
            {title} - {description} {
              stock === 0 && <div className="text-xl font-semibold text-orange-500">Out of Stock</div>
            }
          </div>
          <div className="price flex sm:flex-row flex-col gap-5 sm:items-center">
            <div className="text-xl text-bold flex gap-3 items-center">
              <span className="line-through opacity-30">
                ₹ {formatINRCurrency(price)}
              </span>
              <span>
                ₹{" "}
                {formatINRCurrency(
                  Math.round(discountAmount(price, discountPercentage))
                )}
              </span>
              <span className="font-semibold text-sm text-green-600">
                {discountPercentage} % Off
              </span>
            </div>
            <div className="flex w-fit gap-1 items-center text-white px-1 py-0.5 text-sm rounded bg-green-700">
              <StarIcon className="size-3" />
              {rating}
            </div>
          </div>
          {cateogies_keys.map((ele) => {
            return (
              <div key={ele} className="flex gap-4 py-2">
                {categories[ele].map((item) => (
                  <div
                    key={item}
                    className={`${
                      ele === "colors"
                        ? "w-5 h-5 rounded-full"
                        : "sm:px-3 sm:py-2 p-1 rounded"
                    } ${
                      selected[ele] === item ? "ring-1 ring-black" : ""
                    } cursor-pointer`}
                    style={{
                      background: `${ele === "colors" ? item : "#f0f0f0"}`,
                    }}
                    onClick={() => handleSelect(ele, item)}
                  >
                    {ele !== "colors" && item}
                  </div>
                ))}
              </div>
            );
          })}
          <p className="text-gray-500">{fulldesc}</p>
          <div className="flex">
            <button
              onClick={() => addToCart(cartData)}
              disabled={stock === 0}
              className="bg-black px-10 py-3 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
            
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 w-full py-10">
        <ProductDetailsDesc
          fulldesc={fulldesc}
          details={details}
          desciption={description}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
