import { CartContext } from "@/context/Cart";
import { GlobalContext } from "@/context/global";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";

const Header = () => {
  const CDN_LINK = process.env.NEXT_PUBLIC_CDN_URL;

  const router = useRouter();
  const { isLoggedIn, setLoginStatus } = useContext(GlobalContext);
  const { itemsCount } = useContext(CartContext);

  const handleLoginButton = () => {
    if (isLoggedIn) setLoginStatus(false);

    router.push("/login");
  };

  return (
    <>
      <header className="w-full">
        <div className="container">
          <div className="md:py-6 py-4">
            <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
              <div
                className="flex flex-col sm:flex-row items-center gap-4 relative cursor-pointer"
                onClick={() => {
                  router.push("/");
                }}
              >
                <a className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50">
                  <Image src={`${CDN_LINK}/images/logo/logo-square.png`} alt="Logo" width={100} height={100} />
                </a>
                <div className="flex flex-col">
                  <h1 className="text-xl">Great Experince Store</h1>
                  <small className="text-gray-400">A Store For All Your Ideas</small>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="w-[70px] h-[40px] rounded text-center flex-center  text-primary-50"
                  onClick={handleLoginButton}
                >
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
                <div className="relative">
                  <button
                    type="button"
                    className="w-[40px] h-[40px] rounded-full text-center flex-center bg-secondary-50 text-primary"
                    onClick={() => {
                      router.push("/cart");
                    }}
                  >
                    <i className="sicon-shopping-bag"></i>
                    {isLoggedIn && itemsCount > 0 && (
                      <span className="rounded-full bg-primary text-secondary absolute top-0 w-5 h-5 text-xs left-7 flex justify-center items-center">
                        {itemsCount}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
