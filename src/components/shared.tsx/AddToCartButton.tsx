import { GlobalContext } from "@/context/global";
import { useRouter } from "next/router";
import { useContext } from "react";

const AddToCartButton = ({ handleAddToCart }: { handleAddToCart: (event: React.MouseEvent<HTMLElement>) => void }) => {
  const { isLoggedIn } = useContext(GlobalContext);
  const router = useRouter();

  return (
    <button
      type="button"
      className="w-full h-[42px] bg-primary text-secondary  p-2 text-md rounded-md focus:bg-primary-darker"
      onClick={event => {
        if (!isLoggedIn) {
          router.push("/login");
        }

        handleAddToCart(event);
      }}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
