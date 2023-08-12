import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full main flex-auto">
        <div className="container">
          <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
            <Slider></Slider>

            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
              <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
                <a href="#" className="block w-full relative mb-4">
                  <Image
                    src="/images/products/01.png"
                    className="w-full aspect-4/3 object-cover rounded-lg"
                    alt="product"
                    width={500}
                    height={400}
                  />
                </a>
                <div className="w-full flex flex-col flex-1 items-start justify-start">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                    <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">2,250.00 SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
                  إضافة للسلة
                </button>
              </div>
              <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
                <a href="#" className="block w-full relative mb-4">
                  <Image
                    src="/images/products/02.png"
                    className="w-full aspect-4/3 object-cover rounded-lg"
                    alt="product"
                    width={500}
                    height={400}
                  />
                </a>
                <div className="w-full flex flex-col flex-1 items-start justify-start">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                    <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">2,250.00 SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
                  إضافة للسلة
                </button>
              </div>
              <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
                <a href="#" className="block w-full relative mb-4">
                  <Image
                    src="/images/products/03.png"
                    className="w-full aspect-4/3 object-cover rounded-lg"
                    alt="product"
                    width={500}
                    height={400}
                  />
                </a>
                <div className="w-full flex flex-col flex-1 items-start justify-start">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                    <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">2,250.00 SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
                  إضافة للسلة
                </button>
              </div>
              <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
                <a href="#" className="block w-full relative mb-4">
                  <Image
                    src="/images/products/04.png"
                    className="w-full aspect-4/3 object-cover rounded-lg"
                    alt="product"
                    width={500}
                    height={400}
                  />
                </a>
                <div className="w-full flex flex-col flex-1 items-start justify-start">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                    <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">2,250.00 SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
                  إضافة للسلة
                </button>
              </div>
              <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
                <a href="#" className="block w-full relative  mb-4">
                  <img
                    src="images/products/05.png"
                    className="w-full aspect-4/3 object-cover rounded-lg"
                    alt="product"
                  />
                </a>
                <div className="w-full flex flex-col flex-1 items-start justify-start">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                    <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">2,250.00 SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
                  إضافة للسلة
                </button>
              </div>
              <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
                <a href="#" className="block w-full relative mb-4">
                  <img
                    src="images/products/06.png"
                    className="w-full aspect-4/3 object-cover rounded-lg"
                    alt="product"
                  />
                </a>
                <div className="w-full flex flex-col flex-1 items-start justify-start">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                    <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">2,250.00 SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
                  إضافة للسلة
                </button>
              </div>
              <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
                <a href="#" className="block w-full relative mb-4">
                  <img
                    src="images/products/07.png"
                    className="w-full aspect-4/3 object-cover rounded-lg"
                    alt="product"
                  />
                </a>
                <div className="w-full flex flex-col flex-1 items-start justify-start">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                    <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">2,250.00 SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
                  إضافة للسلة
                </button>
              </div>
              <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
                <a href="#" className="block w-full relative mb-4">
                  <img
                    src="images/products/08.png"
                    className="w-full aspect-4/3 object-cover rounded-lg"
                    alt="product"
                  />
                </a>
                <div className="w-full flex flex-col flex-1 items-start justify-start">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max الاصدار الجديد</h2>
                    <small className="text-xs text-gray-500">الاصدار الاحدث و الافضل حتى اليوم</small>
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                  <span className="font-medium text-md">2,250.00 SAR</span>
                  <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
                </div>
                <button type="button" className="w-full bg-primary text-secondary p-2 text-md rounded-md">
                  إضافة للسلة
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
