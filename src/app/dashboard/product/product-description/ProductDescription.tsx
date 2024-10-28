import { useState } from "react";
import DashboardLayout from "../../../../layout/DashboardLayout";
import ProductTitle from "../../../../components/products/ProductTitle";

export default function ProductDescription() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const hhh = () => {
    alert("first");
  };

  const selectOnChange = (value: string | null) => {
    if (value) {
      setSelect(value);
    }
  };
  return (
    <DashboardLayout>
      <div className="md:w-[90%] w-[95%] h-[84vh] mt-[3vh] rounded-[16px] shadow-lg shadow-[#8F95B226] mx-auto bg-white p-4">
        <ProductTitle
          btnText="Add Product Description"
          handleClick={hhh}
          searchOnChange={(e) => setSearch(e.currentTarget.value)}
          searchValue={search}
          selectOnChange={selectOnChange}
          selectValue={select}
          filterText="description(s)"
          selectData={[]}
          setSearch={setSearch}
        />
        ProductDescription
      </div>
    </DashboardLayout>
  );
}
