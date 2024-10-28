import { Modal, Table } from "@mantine/core";
import { TProductResponseProp } from "../../types/Products";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  product: TProductResponseProp | null;
}

export default function ShowProductDetails({
  isOpen,
  onClose,
  product,
}: Props) {
  if (!product) return;
  const keys = Object.entries(product);
  return (
    <Modal
      onClose={onClose}
      opened={isOpen}
      centered
      radius={12}
      title={
        <span className="font-semibold text-sm">
          View <span className="font-bold uppercase">{product?.code}</span>{" "}
          product
        </span>
      }
    >
      <Table>
        <Table.Tbody>
          {keys?.map((key, index) => (
            <Table.Tr key={index}>
              <Table.Th>{key[0]}</Table.Th>
              <Table.Td className="uppercase">{key[1] || "--"}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Modal>
  );
}
