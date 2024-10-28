import { Table } from "@mantine/core";
import { TCustomerProps } from "../../types/Customer";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useAppStore from "../../hooks/store/AppStore";
import CustomerDescriptionModal from "./CustomerDescriptionModal";

interface Props {
  customers: TCustomerProps[] | null | undefined;
  pageNo: number;
  setPageNo: Dispatch<SetStateAction<number>>;
}

export default function CustomersTable({
  customers,
  pageNo,
  setPageNo,
}: Props) {
  const [customer, setCustomer] = useState<TCustomerProps | null>(null);
  const isCustomerDescriptionDrawerOpen = useAppStore(
    (state) => state.isCustomerDescriptionDrawerOpen
  );
  const setIsCustomerDescriptionDrawerOpen = useAppStore(
    (state) => state.setIsCustomerDescriptionDrawerOpen
  );
  if (!customers) return;
  const handleDelete = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    const customer = customers?.find((customer) => customer.id === id);
    alert(
      `Delete functionality disabled for ${customer?.lastName} ${customer?.firstName}`
    );
  };

  const handleViewDetails = (id: number) => {
    const customer = customers?.find((customer) => customer.id === id);
    if (!customer) return;
    setCustomer(customer);
    setIsCustomerDescriptionDrawerOpen(true);
  };

  const rows = customers?.map(({ id, lastName, firstName, email }) => (
    <Table.Tr
      key={id}
      onClick={() => handleViewDetails(id)}
      className="cursor-pointer"
    >
      <Table.Td>{id}</Table.Td>
      <Table.Td>{lastName || "-"}</Table.Td>
      <Table.Td>{firstName || "-"}</Table.Td>
      <Table.Td className="md:flex hidden">{email || "-"}</Table.Td>
      <Table.Td>
        <div
          className="md:w-8 w-6 md:h-8 h-6 grid place-content-center bg-[#fafafa] shadow shadow-[#E6E8F0] rounded-full transition-all duration-500 group"
          onClick={(e) => handleDelete(e, id)}
        >
          <RiDeleteBin5Line className="cursor-pointer text-[18px] group-hover:text-primaryRed" />
        </div>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="w-full  md:h-[72vh] h-[70vh] flex flex-col justify-between py-4">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th>First Name</Table.Th>
            <Table.Th className="md:flex hidden">Email</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      <div className="flex items-center justify-center gap-3">
        <button
          className="w-8 h-8 rounded-lg grid place-content-center border border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed bg-primaryRed text-white"
          onClick={() => setPageNo((prev) => prev - 1)}
          disabled={pageNo === 0}
        >
          <FaChevronLeft />
        </button>

        <button
          className="w-8 h-8 rounded-lg grid place-content-center border border-gray-300 disabled:bg-gray-300 disabled:cursor-not-allowed bg-primaryRed text-white"
          onClick={() => setPageNo((prev) => prev + 1)}
          disabled={customers.length == 0 || customers.length < 5}
        >
          <FaChevronRight />
        </button>
      </div>

      <CustomerDescriptionModal
        customer={customer}
        isOpen={isCustomerDescriptionDrawerOpen}
        onClose={() => setIsCustomerDescriptionDrawerOpen(false)}
      />
    </div>
  );
}
