"use client";

import { getProduct } from "@/utils/getProduct";
import { useParams } from "next/navigation";
import React from "react";
import SingleProduct from "../components/SingleProduct";
import Header from "@/components/Header";

const page = () => {
  const { id } = useParams();
  const product = getProduct(id);
  return (
    <div className="bg-white text-black">
      <Header />
      <SingleProduct 
        id={id}
        images={product.images} 
        title={product.title} 
        description={product.description}
        price={product.price}
        rating={product.rating}
        categories = {product?.categories}
        fulldesc={product?.fulldesc}
        details={product?.details}
        thumbnail={product.thumbnail}
        discountPercentage={product.discountPercentage}
        stock={product.stock}
      />
    </div>
  );
};

export default page;
