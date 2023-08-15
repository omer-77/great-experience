import { GlobalContext } from "@/context/global";
import { useContext, useEffect, useState } from "react";

const CategoriesFilter = () => {
  const [categoriesList, setCategoriesList] = useState<Array<string>>([]);
  //   const [selectedCategory, setSelectedCategory] = useState<string>("");

  const { selectedCategory, setSelectedCategory } = useContext(GlobalContext);

  const PRODUCT_API = process.env.NEXT_PUBLIC_PRODUCT_API;

  const fetchData = async () => {
    const res = await fetch(`${PRODUCT_API}/products/categories`);
    const data = await res.json();

    setCategoriesList(["All", ...data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <select
      value={selectedCategory}
      onChange={event => {
        setSelectedCategory(event.target.value);
      }}
      name="categories"
      id="categories"
      className="w-1/4 p-2 bg-white  rounded-md border text-md"
    >
      {categoriesList.map((category, index) => {
        return (
          <option key={index} value={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

export default CategoriesFilter;
