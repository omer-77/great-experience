import Slider from "@/components/Slider";
import Catalog from "@/components/catalog/Catalog";

export default function Home() {
  return (
    <>
      <main className="w-full main flex-auto">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <Slider></Slider>
          <Catalog></Catalog>
        </div>
      </main>
    </>
  );
}
