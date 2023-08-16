import CountWidget from "@/components/cart/CountWidget";
import { CartContext } from "@/context/Cart";
import { GlobalContext } from "@/context/global";
import { CartItem } from "@/types/Catalog";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Cart = () => {
  const router = useRouter();
  const { isLoggedIn } = useContext(GlobalContext);
  const { cartItems, deleteItem, editItem } = useContext(CartContext);

  if (typeof window !== "undefined" && !isLoggedIn) {
    router.push("/login");
    return;
  }

  const handleDeleteItem = (id: number) => deleteItem(id);

  const goToProductPage = (id: number) => {
    router.push(`product-details/?productId=${id}`);
  };

  const increaseCount = (cartItem: CartItem) => {
    editItem(cartItem.item.id, cartItem.count + 1);
  };

  const decreaseCount = (cartItem: CartItem) => {
    if (cartItem.count - 1 < 1) return;

    editItem(cartItem.item.id, cartItem.count - 1);
  };

  return (
    <div>
      <main className="w-full main flex-auto">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <div className="flex flex-col mb-6">
            <h2 className="text-lg flex items-center justify-start gap-2">Shopping Cart</h2>
          </div>
          <ul className="flex flex-col">
            {cartItems.length <= 0
              ? "Cart Is Empty..."
              : cartItems.map((cartItem, index) => {
                  return (
                    <li
                      onClick={() => goToProductPage(cartItem.item.id)}
                      key={index}
                      className="flex items-center justify-between gap-4 w-full pb-4 border-b border-b-gray-50 p-4 rounded-md transition-all hover:bg-grayer-100"
                    >
                      <a href="#" className="flex items-start justify-center gap-2 flex-1">
                        <Image
                          className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden"
                          src={cartItem.item.image}
                          alt="Product Thumb"
                          width={200}
                          height={400}
                        />
                        <div className="flex flex-col flex-1 gap-1">
                          <h4>{cartItem.item.title}</h4>
                          <span className="text-xs text-gray-500">{cartItem.item.price} SAR</span>
                        </div>
                      </a>
                      <CountWidget
                        count={cartItem.count}
                        increaseCount={() => {
                          increaseCount(cartItem);
                        }}
                        decreaseCount={() => {
                          decreaseCount(cartItem);
                        }}
                      ></CountWidget>
                      <button
                        onClick={event => {
                          event.stopPropagation();

                          handleDeleteItem(cartItem.item.id);
                        }}
                        type="button"
                        className="w-[28px] h-[28px] shrink-0 flex-center text-xs border border-red-500 text-red-500 rounded-full p-1"
                      >
                        <i className="sicon-trash"></i>
                      </button>
                    </li>
                  );
                })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Cart;
