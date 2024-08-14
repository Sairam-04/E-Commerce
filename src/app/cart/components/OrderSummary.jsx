import { calculateAmount, discountAmount } from "@/utils/discountAmount";
import { formatINRCurrency } from "@/utils/formatCurrency";
import React, { useState } from "react";

const OrderSummary = ({ items }) => {
  const ShippingCost = 80;
  const SubTotal = calculateAmount(items);
  const [promocode, setPromoCode] = useState();
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setPromoCode(e.target.value);
  };
  const checkPromoCode = () => {
    if (promocode === "StoreVilla") {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };
  return (
    <div className="w-full border p-4 shadow-lg bg-zinc-100 rounded-lg flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Order Summary</h1>
      <div className="inpfield flex flex-col">
        <label className="font-semibold text-base" htmlFor="promocode">
          Discount/PromoCode
        </label>
        <div className="text-xs">
          Apply "StoreVilla" PromoCode for Discount of 20% on Total Amount
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            name="promocode"
            id="promocode"
            onChange={handleChange}
            placeholder="PROMO CODE"
            className="shadow-sm bg-white my-2 text-black p-2 w-4/5 rounded-lg"
          />
          <button
            onClick={checkPromoCode}
            className="text-blue-700 font-semibold"
          >
            Apply
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="font-semibold text-base">SubTotal</span>
          <span>₹ {formatINRCurrency(SubTotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-base">Shipping Cost</span>
          <span>₹ {ShippingCost}</span>
        </div>
        <hr />
        <div className="flex justify-between">
          <span className="font-semibold text-lg">Total</span>
          <span>₹ {formatINRCurrency(SubTotal + ShippingCost)}</span>
        </div>
        {success && (
          <div className="flex justify-between">
            <span className="font-semibold text-lg">
              Total Amount (PromoCode)
            </span>
            <span>
              ₹ {formatINRCurrency(discountAmount(SubTotal + ShippingCost, 20))}
            </span>
          </div>
        )}
      </div>
      <div>
        <button className="bg-black text-white w-full rounded py-3 my-2">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
