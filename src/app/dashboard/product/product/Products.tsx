import { useEffect, useState } from "react";
import ProductTitle from "../../../../components/products/ProductTitle";
import DashboardLayout from "../../../../layout/DashboardLayout";
import { useGetAllProducts } from "../../../../hooks/api/products";
import LoadingOverlay from "../../../../components/custom/Loader/LoadingOverlay";
import ProductTable from "../../../../components/products/ProductTable";
import { TProductResponseProp } from "../../../../types/Products";
import AddProductForm from "../../../../components/products/AddProductForm";
import useAppStore from "../../../../hooks/store/AppStore";

export default function Products() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");
  const [filteredProduct, setFilteredProduct] = useState<
    TProductResponseProp[] | undefined
  >([]);
  const setIsAddProductDrawerOpen = useAppStore(
    (state) => state.setIsAddProductDrawerOpen
  );

  const { data, isFetching } = useGetAllProducts();
  const allProducts = data?.productDtoList;

  const uniqueProductTypes = Array.from(
    new Set(allProducts?.map((product) => product.type.toLowerCase()))
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearch(value);
  };

  const handleSearchFocus = () => {
    setSelect("all");
  };

  const handleAddProduct = () => {
    setIsAddProductDrawerOpen(true);
  };

  const selectOnChange = (value: string | null) => {
    if (value) {
      setSelect(value);
    }
  };

  useEffect(() => {
    if (select?.toLowerCase() === "all") {
      setFilteredProduct(allProducts);
    } else {
      setFilteredProduct(
        allProducts?.filter(
          (product) => product.type.toLowerCase() === select.toLowerCase()
        )
      );
    }
  }, [allProducts, select]);

  useEffect(() => {
    if (search?.toLowerCase() === "") {
      setFilteredProduct(allProducts);
    } else {
      setFilteredProduct(
        allProducts?.filter(
          (product) =>
            product.type.toLowerCase().includes(search.toLowerCase()) ||
            product.code.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [allProducts, search]);

  return (
    <DashboardLayout>
      <div className="md:w-[90%] w-[95%] h-[84vh] mt-[3vh] rounded-[16px] shadow-lg shadow-[#8F95B226] mx-auto bg-white p-4 relative">
        <LoadingOverlay isLoading={isFetching} />

        <ProductTitle
          btnText="Add Product"
          handleClick={handleAddProduct}
          searchOnChange={handleSearch}
          searchValue={search}
          setSearch={setSearch}
          selectOnChange={selectOnChange}
          selectValue={select}
          filterText="product(s)"
          selectData={["all", ...uniqueProductTypes]}
          onFocus={handleSearchFocus}
        />

        <ProductTable allProducts={filteredProduct} />
      </div>
      <AddProductForm />
    </DashboardLayout>
  );
}
