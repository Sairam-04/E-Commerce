"use client";

import React, { useContext, useEffect, useState } from "react";
import productsData from "../../data/products.json";
import Products from "@/app/products/components/Products";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import SearchContext from "../lib/context/SearchContext";

const ProductsPage = () => {
  const { searchText } = useContext(SearchContext);
  const PRODUCTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
  
  const lastIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstIndex = lastIndex - PRODUCTS_PER_PAGE;

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((page) => page - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((page) => page + 1);
    }
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  const filterProductsBySearch = () => {
    const filtered = productsData.filter((ele) =>
      ele.title.toLowerCase().includes(searchText.toLowerCase()) ||
      ele.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); 
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      filterProductsBySearch();
    }, 500); 
  
    return () => clearTimeout(timeoutId);
  }, [searchText]);

  useEffect(() => {
    setPaginatedProducts(filteredProducts.slice(firstIndex, lastIndex));
  }, [currentPage, filteredProducts]);

  return (
    <>
      <Products products={paginatedProducts} />
      <div className="sm:w-full w-[90%] flex flex-wrap text-black py-4 justify-center gap-3">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          className="px-4 py-1 text-base rounded bg-white border border-black disabled:opacity-30"
        >
          <ChevronLeftIcon className="size-4 text-black" />
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
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
          disabled={currentPage === totalPages}
          className="px-4 py-1 disabled:opacity-30 text-base rounded bg-white border border-black"
        >
          <ChevronRightIcon className="size-4 text-black" />
        </button>
      </div>
    </>
  );
};

export default ProductsPage;
