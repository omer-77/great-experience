import { useState } from "react";
import ProductsList from "./ProductsList";
import CategoriesFilter from "./CategoriesFilter";

const Catalog = () => {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };
  return (
    <>
      <div className="flex justify-between my-5">
        <input
          type="text"
          name="search"
          id="username"
          className="form-control w-2/4 p-2 bg-white appearance-none rounded-md border text-md"
          placeholder="Search.."
          onChange={handleChange}
        />

        <CategoriesFilter ></CategoriesFilter>
      </div>
      <ProductsList searchFilter={searchFilter}></ProductsList>
    </>
  );
};

export default Catalog;
