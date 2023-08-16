import Image from "next/image";
import { Product } from "@/types/Catalog";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "@/context/global";
import { CartContext } from "@/context/Cart";
import AddToCartButton from "../shared.tsx/AddToCartButton";

export const ProductItem = ({ productItem }: { productItem: Product }) => {
  const router = useRouter();
  const { addItem } = useContext(CartContext);

  const redirectToDetailsPage = () => {
    router.push({ pathname: "/product-details", query: { productId: productItem.id } });
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    addItem({ count: 1, item: productItem });
  };

  return (
    <div
      onClick={redirectToDetailsPage}
      className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative cursor-pointer"
    >
      <a className="block w-full relative mb-4">
        <Image
          src={productItem.image}
          className="w-full aspect-4/3 object-cover rounded-lg"
          alt="product"
          width={500}
          height={400}
        />
      </a>
      <div className="w-full flex flex-col flex-1 items-start justify-start">
        <div className="block w-full text-primary text-center">
          <h2 className="text-sm">{productItem.title}</h2>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
        <span className="font-medium text-md">{productItem.price} SAR</span>
      </div>
      <AddToCartButton handleAddToCart={handleAddToCart} />
    </div>
  );
};
