import Image from "next/image";

const Header = () => {
  const CDN_LINK = process.env.NEXT_PUBLIC_CDN_URL;

  return (
    <>
      <header className="w-full">
        <div className="container">
          <div className="md:py-6 py-4">
            <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
              <div className="flex flex-col sm:flex-row items-center gap-4 relative">
                <a
                  href="#"
                  className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50"
                >
                  <Image src={`${CDN_LINK}/images/logo/logo-square.png`} alt="Logo" width={100} height={100} />
                </a>
                <div className="flex flex-col">
                  <h1 className="text-xl">متجر التجربة الجميلة</h1>
                  <small className="text-gray-400">متجرك لكل تجاربك وأفكارك الجميلة</small>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
                >
                  <i className="sicon-user"></i>
                </button>
                <div className="relative">
                  <button
                    type="button"
                    className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary"
                  >
                    <i className="sicon-shopping-bag"></i>
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
