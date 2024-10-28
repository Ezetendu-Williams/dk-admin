import { object, string } from "yup";
import { useUpdateProductCategory } from "../../hooks/api/products";
import useIsMobile from "../../hooks/custom/useIsMobile";
import useAppStore from "../../hooks/store/AppStore";
import {
  TAddProductCategoryPayload,
  TProductCategoriesProps,
} from "../../types/Products";
import ERRORS from "../../data/Errors";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SUCCESS_CODE } from "../../data/Constants";
import openNotification from "../../utils/OpenNotification";
import { useEffect } from "react";
import { Drawer, Select, TextInput } from "@mantine/core";
import LoadingOverlay from "../custom/Loader/LoadingOverlay";
import PrimaryButton from "../custom/Buttons/PrimaryButton";
import ModalTitle from "../custom/ModalTitle/ModalTitle";

interface Props {
  productCategory: TProductCategoriesProps | null;
  productCodes: string[] | undefined;
}

interface FormProps {
  category: string;
  code: string;
  productCode: string;
}

export default function EditProductCategoriesForm({
  productCategory,
  productCodes,
}: Props) {
  const { isMobile } = useIsMobile();
  const setIsProductCategoryDrawerOpen = useAppStore(
    (state) => state.setIsProductCategoryDrawerOpen
  );
  const isProductCategoryDrawerOpen = useAppStore(
    (state) => state.isProductCategoryDrawerOpen
  );

  const onClose = () => {
    setIsProductCategoryDrawerOpen(false);
  };

  const { mutateAsync: updateProductCategory, isPending } =
    useUpdateProductCategory();

  const validationSchema = object().shape({
    code: string().required(ERRORS.required("code")),
    category: string().required(ERRORS.required("category")),
    productCode: string().required(ERRORS.required("product code")),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormProps>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    const payload: TAddProductCategoryPayload = {
      code: data.code,
      category: data.category,
      productCode: data.productCode,
    };

    const response = await updateProductCategory(payload);
    if (response?.responseDto?.code === SUCCESS_CODE) {
      openNotification("success", response?.responseDto?.message, "top-center");
      reset();
      onClose();
      return;
    }
  };

  useEffect(() => {
    if (!productCategory) return;
    setValue("code", productCategory?.code);
    setValue("category", productCategory?.category);

    if (!productCategory?.productCode) {
      setValue("productCode", "");
      return;
    }
    setValue("productCode", productCategory?.productCode);
  }, [productCategory, setValue]);

  return (
    <Drawer
      opened={isProductCategoryDrawerOpen}
      onClose={onClose}
      position="right"
      size={isMobile ? "80%" : "md"}
      title={<ModalTitle title="Edit Product Category" />}
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
