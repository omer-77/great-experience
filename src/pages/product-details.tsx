import Image from "next/image";
import { useContext } from "react";
import { GlobalContext } from "@/context/global";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const { productDetailsItem } = useContext(GlobalContext);

  const router = useRouter();

  if (typeof window !== "undefined" && productDetailsItem.id === 0) {
    router.push("/");
  }

  return (
    <div>
      <main className="w-full main flex-auto">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <Image
              width={300}
              height={300}
              src={productDetailsItem.image}
              className="w-full aspect-4/3 object-cover rounded-lg mb-8 sm:mb-0"
              alt="product img"
            />
            <div className="flex flex-col gap-4 col-span-2">
              <article className="text-sm text-darker-300 leading-[1.8] ">
                <div className="flx flex-col mb-6 gap-2">
                  <h1 className="text-xl">{productDetailsItem.title}</h1>
                  <small className="text-xs text-gray-500">{productDetailsItem.category}</small>
                </div>
                <div className="flex flex-col sm:flex-row w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">{productDetailsItem.price}</span>
                </div>
                <p>{productDetailsItem.description}</p>
              </article>
              <div className="flex items-center justify-center gap-4">
                <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
                  <button className="shrink-0 px-2 text-md text-gray-500">+</button>
                  <input type="number" value="1" className="w-[50px] flex-1 text-center appearance-none" />
                  <button className="shrink-0 px-2 text-md text-gray-500">-</button>
                </div>
                <button
                  type="button"
                  className="w-full h-[42px] bg-primary text-secondary flex-1 p-2 text-md rounded-md"
                >
                  إضافة للسلة
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;
