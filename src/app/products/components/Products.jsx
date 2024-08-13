import Product from "./Product";

const Products = ({products}) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 w-4/5 my-4 mx-auto">
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            id={product.id}
            desc={product.desc}
            brand={product.brand}
            thumbnail={product.thumbnail}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
    </div>
  );
};

export default Products;
