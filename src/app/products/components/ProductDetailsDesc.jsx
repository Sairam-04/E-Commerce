const ProductDetailsDesc = ({ fulldesc, desciption, details }) => {
  return (
    <div className="flex flex-col gap-4 bg-white sm:w-4/5 w-full mx-auto p-4 rounded-lg shadow-xl">
      <div className="text-xl text-bold">Details</div>
      <div className="text-sm text-gray-500 py-2">
        <p>{desciption + " " + fulldesc}</p>
      </div>
      {details.map((detail, index) => {
        const key = Object.keys(detail)[0];
        const value = detail[key];
        return (
          <div key={index} className="w-full flex flex-col gap-2">
            <div className="w-full flex sm:flex-row flex-col justify-between">
              <div className="">{key}</div>
              <div className="sm:w-1/5 w-full text-gray-500">{value}</div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetailsDesc;
