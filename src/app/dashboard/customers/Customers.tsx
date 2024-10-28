import { useEffect, useState } from "react";
import LoadingOverlay from "../../../components/custom/Loader/LoadingOverlay";
import { useGetCustomers } from "../../../hooks/api/customer";
import DashboardLayout from "../../../layout/DashboardLayout";
import { TCustomerProps, TGetCustomersPayload } from "../../../types/Customer";
import CustomersTable from "../../../components/customers/CustomersTable";

export default function Customers() {
  const [pageNo, setPageNo] = useState(0);
  const [customers, setCustomers] = useState<
    TCustomerProps[] | undefined | null
  >(null);
  const { mutateAsync: getCustomers, isPending } = useGetCustomers(pageNo);

  useEffect(() => {
    (async () => {
      const payload: TGetCustomersPayload = {
        pageNo,
        pageSize: 5,
      };
      const response = await getCustomers(payload);
      const customersDetails = response?.userDtoList;
      setCustomers(customersDetails);
    })();
  }, [getCustomers, pageNo]);

  return (
    <DashboardLayout>
      <LoadingOverlay isLoading={isPending} />

      <div className="md:w-[90%] w-[95%] h-[84vh] mt-[3vh] rounded-[16px] shadow-lg shadow-[#8F95B226] mx-auto bg-white p-4">
        <h2 className="md:text-[20px] text-[16px] font-semibold">Customers</h2>

        <CustomersTable
          customers={customers}
          setPageNo={setPageNo}
          pageNo={pageNo}
        />
      </div>
    </DashboardLayout>
  );
}
