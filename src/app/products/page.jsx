"use client";

import React, { useEffect, useState } from "react";
import productsData from "../../data/products.json";
import Products from "@/app/products/components/Products";
import Header from "@/components/Header";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const page = () => {
  const totalProducts = productsData.length;
  const PRODUCTS_PER_PAGE = totalProducts / 10;
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array(PRODUCTS_PER_PAGE)
    .fill()
    .map((_, index) => index + 1);
  const lastIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < PRODUCTS_PER_PAGE) {
      setCurrentPage((page) => page + 1);
    }
  };
  const changePage = (page) => {
    setCurrentPage(page);
  };
  const [products, setProducts] = useState(productsData);
  const products_data = products.slice(firstIndex, lastIndex);

  const filterByPrice = () => {
    const filtered = products.filter((ele) => ele.price <= 100);
    setProducts(filtered);
  };

  return (
    <>
      {" "}
      {/* <button onClick={filterByPrice}>Filter</button> */}
      <Products products={products_data} />
      <div className="flex text-black py-4 justify-center gap-3">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="px-4 py-1 text-base rounded bg-white border border-black disabled:opacity-30"
        >
          <ChevronLeftIcon className="size-4 text-black" />
        </button>
        {pages.map((item) => (
          <button
            key={item}
            onClick={() => changePage(item)}
            className={`px-4 py-1 text-base border-[.1px] rounded border-black ${
              currentPage === item
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {item}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === PRODUCTS_PER_PAGE}
          className="px-4 py-1 disabled:opacity-30 text-base rounded bg-white border border-black"
        >
          <ChevronRightIcon className="size-4 text-black" />
        </button>
      </div>
    </>
  );
};

export default page;
