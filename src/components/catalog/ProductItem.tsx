import Image from "next/image";
import { Product } from "@/types/Catalog";

export const ProductItem = ({ productItem }: { productItem: Product }) => {
  return (
    <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
      <a href="#" className="block w-full relative mb-4">
        <Image
          src={productItem.image}
          className="w-full aspect-4/3 object-cover rounded-lg"
          alt="product"
          width={500}
          height={400}
        />
      </a>
      <div className="w-full flex flex-col flex-1 items-start justify-start">
        <a href="#" className="block w-full text-primary text-center">
          <h2 className="text-sm">{productItem.title}</h2>
          <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
        </a>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
        <span className="font-medium text-md">{productItem.price} SAR</span>
        {/* <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span> */}
      </div>
      <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
        Add to Cart
      </button>
    </div>
  );
};
