import { Modal, Table } from "@mantine/core";
import { TCustomerProps } from "../../types/Customer";

interface TCustomerDetailsProps {
  customer: TCustomerProps | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CustomerDescriptionModal({
  customer,
  isOpen,
  onClose,
}: TCustomerDetailsProps) {
  if (!customer) return;
  const keys = Object.entries(customer);
  return (
    <Modal
      onClose={onClose}
      opened={isOpen}
      centered
      radius={12}
      title={
        <span className="font-semibold text-sm">
          View{" "}
          <span className="font-bold uppercase">{customer?.firstName}</span>{" "}
          details
        </span>
      }
    >
      <Table>
        <Table.Tbody>
          {keys?.map((key, index) => (
            <Table.Tr key={index}>
              <Table.Th>{key[0]}</Table.Th>
              <Table.Td className="lowercase">{key[1] || "--"}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Modal>
  );
}
