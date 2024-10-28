import { object, string } from "yup";
import { useAddProductCategory } from "../../hooks/api/products";
import useIsMobile from "../../hooks/custom/useIsMobile";
import useAppStore from "../../hooks/store/AppStore";
import ERRORS from "../../data/Errors";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TAddProductCategoryPayload } from "../../types/Products";
import { SUCCESS_CODE } from "../../data/Constants";
import openNotification from "../../utils/OpenNotification";
import { Drawer, Select, TextInput } from "@mantine/core";
import ModalTitle from "../custom/ModalTitle/ModalTitle";
import LoadingOverlay from "../custom/Loader/LoadingOverlay";
import PrimaryButton from "../custom/Buttons/PrimaryButton";

interface Props {
  productCodes: string[] | undefined;
}

interface FormProps {
  category: string;
  code: string;
  productCode: string;
}

export default function AddProductCategoryForm({ productCodes }: Props) {
  const isAddProductCategoryDrawerOpen = useAppStore(
    (state) => state.isAddProductCategoryDrawerOpen
  );
  const setIsAddProductCategoryDrawerOpen = useAppStore(
    (state) => state.setIsAddProductCategoryDrawerOpen
  );

  const { isMobile } = useIsMobile();
  const { mutateAsync: addproductCategory, isPending } =
    useAddProductCategory();

  const validationSchema = object().shape({
    category: string().required(ERRORS.required("category")),
    code: string().required(ERRORS.required("code")),
    productCode: string().required(ERRORS.required("productCode")),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormProps>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    const payload: TAddProductCategoryPayload = {
      category: data?.category,
      code: data?.code,
      productCode: data?.productCode,
    };

    const response = await addproductCategory(payload);
    if (response?.responseDto?.code === SUCCESS_CODE) {
      openNotification("success", response?.responseDto?.message, "top-center");
      reset();
      return;
    }
  };

  const onClose = () => {
    setIsAddProductCategoryDrawerOpen(false);
    reset();
  };
  return (
    <Drawer
      opened={isAddProductCategoryDrawerOpen}
      onClose={onClose}
      position="right"
      size={isMobile ? "80%" : "md"}
      title={<ModalTitle title="Add Product Category" />}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3 relative"
      >
        <LoadingOverlay isLoading={isSubmitting || isPending} />

        <Controller
          name="productCode"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Enter product code"
              radius={8}
              data={productCodes}
              error={errors.productCode?.message}
            />
          )}
        />

        <TextInput
          placeholder="Enter code"
          radius={8}
          {...register("code")}
          error={errors.code?.message}
          autoFocus
        />

        <TextInput
          placeholder="Enter Category"
          radius={8}
          {...register("category")}
          error={errors.category?.message}
        />

        <PrimaryButton type="submit" disabled={!isValid}>
          Update
        </PrimaryButton>
      </form>
    </Drawer>
  );
}
