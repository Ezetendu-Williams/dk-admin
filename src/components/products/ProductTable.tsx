import { Pagination, Table } from "@mantine/core";
import { TProductResponseProp } from "../../types/Products";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MouseEvent, useState } from "react";
import useIsMobile from "../../hooks/custom/useIsMobile";
import EditProductForm from "./EditProductForm";
import useAppStore from "../../hooks/store/AppStore";
import ShowProductDetails from "./ShowProductDetails";

interface ProductTableProps {
  allProducts: TProductResponseProp[] | undefined;
}

export default function ProductTable({ allProducts }: ProductTableProps) {
  const [activePage, setPage] = useState(1);
  const [product, setProduct] = useState<TProductResponseProp | null>(null);
  const size = 5;
  const [showdetailsModal, setShowDetailsModal] = useState(false);
  const { isMobile } = useIsMobile();
  const setIsProductDrawerOpen = useAppStore(
    (state) => state.setIsProductDrawerOpen
  );

  if (!allProducts || allProducts?.length === 0) {
    return (
      <div className="w-full h-full grid place-content-center font-semibold text-[23px]">
        Empty product
      </div>
    );
  }

  function chunk<T>(array: T[], size: number): T[][] {
    if (array.length === 0) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }

  const data = chunk(allProducts, size);

  const handleEdit = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    const product = allProducts?.find((product) => product.id === id);
    if (!product) return;
    setProduct(product);
    setIsProductDrawerOpen(true);
  };

  const handleDelete = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    const product = allProducts?.find((product) => product.id === id);
    if (!product) return;
    setProduct(product);
    alert(`Delete functionality has been disabled for ${product?.code}: 😦`);
  };

  const handleShowProduct = (id: number) => {
    const product = allProducts?.find((product) => product.id === id);
    if (!product) return;
    setProduct(product);
    setShowDetailsModal(true);
  };

  const handleCloseProduct = () => {
    setShowDetailsModal(false);
    setProduct(null);
  };

  const rows = data[activePage - 1].map((product) => (
    <Table.Tr
      key={product.id}
      onClick={() => handleShowProduct(product.id)}
      className="cursor-pointer"
    >
      <Table.Td className="md:text-[14px] text-[11px] uppercase">
        {product.id}
      </Table.Td>
      <Table.Td className="md:text-[14px] text-[11px] uppercase">
        {product.code}
      </Table.Td>
      <Table.Td className="md:text-[14px] text-[11px] uppercase">
        {product.type}
      </Table.Td>
      <Table.Td className="flex items-center gap-5 uppercase">
        <div
          className="md:w-8 w-6 md:h-8 h-6 grid place-content-center bg-[#fafafa] shadow shadow-[#E6E8F0] rounded-full transition-all duration-500 group"
          onClick={(e) => handleEdit(e, product?.id)}
        >
          <MdModeEdit className="cursor-pointer text-[18px] group-hover:text-primaryRed" />
        </div>

        <div
          className="md:w-8 w-6 md:h-8 h-6 grid place-content-center bg-[#fafafa] shadow shadow-[#E6E8F0] rounded-full transition-all duration-500 group"
          onClick={(e) => handleDelete(e, product?.id)}
        >
          <RiDeleteBin5Line className="cursor-pointer text-[18px] group-hover:text-primaryRed" />
        </div>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <div className="w-full  md:h-[72vh] h-[70vh] flex flex-col justify-between py-4">
        <Table
          striped
          highlightOnHover
          highlightOnHoverColor="#9b90e61a"
          verticalSpacing="md"
        >
          <Table.Thead className="w-full bg-[#6C5DD31A] text-primaryBlack font-semibold">
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>CODE</Table.Th>
              <Table.Th>TYPE</Table.Th>
              <Table.Th>ACTIONS</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>

        <Pagination
          total={Math.ceil(allProducts?.length / size)}
          value={activePage}
          onChange={setPage}
          mt="sm"
          color="#e80e0f"
          hideWithOnePage
          size={isMobile ? "sm" : "md"}
          withEdges
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>

      <EditProductForm product={product} />
      <ShowProductDetails
        isOpen={showdetailsModal}
        onClose={handleCloseProduct}
        product={product}
      />
    </div>
  );
}
