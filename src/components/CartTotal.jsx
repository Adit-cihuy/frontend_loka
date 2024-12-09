import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

export default function CartTotal() {
  const { currency, deliver_fee, cartItems, products, negotiations } = useContext(ShopContext);

  // Fungsi untuk menghitung subtotal, mempertimbangkan status negosiasi
  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
      // Iterasi setiap item dan size
      Object.entries(sizes).forEach(([size, quantity]) => {
        const productData = products.find(product => product._id === itemId);
        const negotiationStatus = negotiations.find(neg => neg.product._id === itemId);

        if (!productData) {
          console.warn(`Product with ID ${itemId} not found.`);
          return;
        }

        const finalPrice =
          negotiationStatus?.status === "accepted"
            ? negotiationStatus.offeredPrice
            : productData.price;

        total += finalPrice * quantity;
      });
      return total;
    }, 0);
  };


  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title title={"Total"} subtitle={"Belanja"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Biaya Pengiriman</p>
          <p>
            {currency} {deliver_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + deliver_fee}
          </b>
        </div>
      </div>
    </div>
  );
}
