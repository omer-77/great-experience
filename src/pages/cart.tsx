import { GetServerSideProps } from "next";

const cart = () => {
  return (
    <div>
      <main className="w-full main flex-auto">
        <div className="container">
          <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
            <div className="flex flex-col mb-6">
              <h2 className="text-lg flex items-center justify-start gap-2">سلة المشتريات</h2>
            </div>
            <ul className="flex flex-col">
              <li className="flex items-center justify-between gap-4 w-full pb-4 border-b border-b-gray-50 p-4 rounded-md transition-all hover:bg-grayer-100">
                <a href="#" className="flex items-start justify-center gap-2 flex-1">
                  <img
                    className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden"
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
                    alt="Product Thumb"
                  />
                  <div className="flex flex-col flex-1 gap-1">
                    <h4>سماعات apple AirPods Max</h4>
                    <span className="text-xs text-gray-500">2,250.00 SAR</span>
                  </div>
                </a>
                <button
                  type="button"
                  className="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1"
                >
                  <i className="sicon-trash"></i>
                </button>
              </li>
              <li className="flex items-center justify-between gap-4 w-full pb-4 border-b border-b-gray-50 p-4 rounded-md transition-all hover:bg-grayer-100">
                <a href="#" className="flex items-start justify-center gap-2 flex-1">
                  <img
                    className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden"
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
                    alt="Product Thumb"
                  />
                  <div className="flex flex-col flex-1 gap-1">
                    <h4>سماعات apple AirPods Max</h4>
                    <span className="text-xs text-gray-500">2,250.00 SAR</span>
                  </div>
                </a>
                <button
                  type="button"
                  className="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1"
                >
                  <i className="sicon-trash"></i>
                </button>
              </li>
              <li className="flex items-center justify-between gap-4 w-full pb-4 p-4 rounded-md transition-all hover:bg-grayer-100">
                <a href="#" className="flex items-start justify-center gap-2 flex-1">
                  <img
                    className="rounded-md w-[35px] object-cover shrink-0 overflow-hidden"
                    src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80"
                    alt="Product Thumb"
                  />
                  <div className="flex flex-col flex-1 gap-1">
                    <h4>سماعات apple AirPods Max</h4>
                    <span className="text-xs text-gray-500">2,250.00 SAR</span>
                  </div>
                </a>
                <button
                  type="button"
                  className="w-[28px] h-[28px] shrink-0 flex items-center justify-center text-xs border border-red-500 text-red-500 rounded-full p-1"
                >
                  <i className="sicon-trash"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default cart;
