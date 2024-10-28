import { useEffect, useState } from "react";
import DashboardLayout from "../../../../layout/DashboardLayout";
import ProductTitle from "../../../../components/products/ProductTitle";
import { TProductCategoriesProps } from "../../../../types/Products";
import useAppStore from "../../../../hooks/store/AppStore";
import {
  useGetAllProducts,
  useGetAllProductsCategories,
} from "../../../../hooks/api/products";
import ProductCategoriesTable from "../../../../components/product-categories/ProductCategoriesTable";
import LoadingOverlay from "../../../../components/custom/Loader/LoadingOverlay";
import AddProductCategoryForm from "../../../../components/product-categories/AddProductCategoryForm";

export default function ProductCategories() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");
  const [filteredProduct, setFilteredProduct] = useState<
    TProductCategoriesProps[] | undefined
  >([]);
  const setIsAddProductCategoryDrawerOpen = useAppStore(
    (state) => state.setIsAddProductCategoryDrawerOpen
  );

  const { data: products, isFetching } = useGetAllProducts();
  const productCodes = products?.productDtoList?.map((product) => product.code);

  const { data, isPending } = useGetAllProductsCategories();
  const allProductCategories = data?.productCategoryDtoList;

  const uniqueProductCategories = Array.from(
    new Set(
      allProductCategories?.map((product) => product.category.toLowerCase())
    )
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
  };

  const handleSearchFocus = () => {
    setSelect("all");
  };

  const handleAddProduct = () => {
    setIsAddProductCategoryDrawerOpen(true);
  };

  const selectOnChange = (value: string | null) => {
    if (value) {
      setSelect(value);
    }
  };

  useEffect(() => {
    if (select?.toLowerCase() === "all") {
      setFilteredProduct(allProductCategories);
    } else {
      setFilteredProduct(
        allProductCategories?.filter(
          (product) => product.category.toLowerCase() === select.toLowerCase()
        )
      );
    }
  }, [allProductCategories, select]);

  useEffect(() => {
    if (search?.toLowerCase() === "") {
      setFilteredProduct(allProductCategories);
    } else {
      setFilteredProduct(
        allProductCategories?.filter(
          (product) =>
            product.category.toLowerCase().includes(search.toLowerCase()) ||
            product.code.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [allProductCategories, search]);

  return (
    <DashboardLayout>
      <div className="md:w-[90%] w-[95%] h-[84vh] mt-[3vh] rounded-[16px] shadow-lg shadow-[#8F95B226] mx-auto bg-white p-4 relative">
        <LoadingOverlay isLoading={isPending || isFetching} />
        <ProductTitle
          btnText="Add Product Categories"
          handleClick={handleAddProduct}
          searchOnChange={handleSearchChange}
          searchValue={search}
          selectOnChange={selectOnChange}
          selectValue={select}
          filterText="categorie(s)"
          selectData={["all", ...uniqueProductCategories]}
          setSearch={setSearch}
          onFocus={handleSearchFocus}
        />

        <ProductCategoriesTable
          allProductCategories={filteredProduct}
          productCodes={productCodes}
        />
      </div>

      <AddProductCategoryForm productCodes={productCodes} />
    </DashboardLayout>
  );
}
