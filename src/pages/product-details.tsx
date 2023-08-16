import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product } from "@/types/Catalog";
import { CartContext } from "@/context/Cart";
import CountWidget from "@/components/cart/CountWidget";
import AddToCartButton from "@/components/shared.tsx/AddToCartButton";
import { NextSeo } from "next-seo";

const ProductDetails = ({ ProductDetailsItem }: { ProductDetailsItem: Product }) => {
  const router = useRouter();
  const productId = router.query.productId;
  const { addItem } = useContext(CartContext);

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (typeof window !== "undefined" && !productId) {
      router.push("/");
    }
  }, [productId, router]);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    const addedCount = count - 1;

    if (addedCount < 1) {
      setCount(1);
      return;
    }

    setCount(addedCount);
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();

    addItem({ count: count, item: ProductDetailsItem });
  };

  return (
    <>
      <NextSeo title={ProductDetailsItem.title} description={ProductDetailsItem.description} />
      <main className="w-full main flex-auto">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
            <Image
              width={300}
              height={300}
              src={ProductDetailsItem.image}
              className="w-full aspect-4/3 object-cover rounded-lg mb-8 sm:mb-0"
              alt="product img"
            />
            <div className="flex flex-col gap-4 col-span-2">
              <article className="text-sm text-darker-300 leading-[1.8] ">
                <div className="flx flex-col mb-6 gap-2">
                  <h1 className="text-xl">{ProductDetailsItem.title}</h1>
                  <small className="text-xs text-gray-500">{ProductDetailsItem.category}</small>
                </div>
                <div className="flex flex-col sm:flex-row w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">{ProductDetailsItem.price}</span>
                </div>
                <p>{ProductDetailsItem.description}</p>
              </article>
              <div className="flex-center gap-4">
                <CountWidget increaseCount={increaseCount} decreaseCount={decreaseCount} count={count}></CountWidget>
                <AddToCartButton handleAddToCart={handleAddToCart} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context: { query: any }) {
  const productId = context.query.productId;
  if (!productId) return { props: { ProductDetailsItem: {} } };

  const PRODUCT_API = process.env.NEXT_PUBLIC_PRODUCT_API;

  const res = await fetch(`${PRODUCT_API}/products/${productId}`);
  const ProductDetailsItem = await res.json();

  return { props: { ProductDetailsItem } };
}

export default ProductDetails;
