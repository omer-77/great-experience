import { useContext, useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { Product } from "@/types/Catalog";
import { GlobalContext } from "@/context/global";

const ProductsList = ({ searchFilter }: { searchFilter: string }) => {
  const [productsList, setProductsList] = useState<Array<Product>>([]);
  const [filteredProductsList, setFilteredProductsList] = useState<Array<Product>>([]);

  const [pageSize, setPageSize] = useState<number>(4);
  const [isLoading, setIsLoading] = useState(false);

  const { selectedCategory } = useContext(GlobalContext);

  const PRODUCT_API = process.env.NEXT_PUBLIC_PRODUCT_API;

  const fetchData = async () => {
    setIsLoading(true);

    const categoryFilter = selectedCategory && selectedCategory !== "All" ? `/category/${selectedCategory}` : "";
    const res = await fetch(`${PRODUCT_API}/products${categoryFilter}?limit=${pageSize}`);
    const data = await res.json();

    // TODO : a limit should be added to this filter
    // OR
    // pagination from APi side
    setPageSize(pageSize + 4);

    setProductsList(data);
    setFilteredProductsList(data);

    setIsLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop - document.documentElement.offsetHeight < -1 ||
      isLoading ||
      !!searchFilter
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchData();
    }
  }, [selectedCategory]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, searchFilter]);

  useEffect(() => {
    if (Boolean(searchFilter)) {
      const filtered = productsList.filter(entry => {
        return entry.title.toLowerCase().includes(searchFilter);
      });

      setFilteredProductsList(filtered);
    }

    if (!searchFilter) {
      setFilteredProductsList(productsList);
    }
  }, [searchFilter]);

  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
        {filteredProductsList.length > 0 &&
          filteredProductsList.map((item, index) => {
            return <ProductItem key={index} productItem={item}></ProductItem>;
          })}
      </div>
      {isLoading && <div className="flex justify-center my-5">Loading...</div>}
    </>
  );
};

export default ProductsList;
