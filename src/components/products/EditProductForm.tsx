import { Drawer, TextInput } from "@mantine/core";
import { TAddProductPayload, TProductResponseProp } from "../../types/Products";
import useAppStore from "../../hooks/store/AppStore";
import useIsMobile from "../../hooks/custom/useIsMobile";
import { useUpdateProduct } from "../../hooks/api/products";
import { object, string } from "yup";
import ERRORS from "../../data/Errors";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SUCCESS_CODE } from "../../data/Constants";
import openNotification from "../../utils/OpenNotification";
import LoadingOverlay from "../custom/Loader/LoadingOverlay";
import PrimaryButton from "../custom/Buttons/PrimaryButton";
import { useEffect } from "react";
import ModalTitle from "../custom/ModalTitle/ModalTitle";

interface Props {
  product: TProductResponseProp | null;
}

interface FormProps {
  code: string;
  type: string;
}

export default function EditProductForm({ product }: Props) {
  const { isMobile } = useIsMobile();
  const setIsProductDrawerOpen = useAppStore(
    (state) => state.setIsProductDrawerOpen
  );
  const isProductDrawerOpen = useAppStore((state) => state.isProductDrawerOpen);

  const onClose = () => {
    setIsProductDrawerOpen(false);
  };

  const { mutateAsync, isPending } = useUpdateProduct();

  const validationSchema = object().shape({
    code: string().required(ERRORS.required("code")),
    type: string().required(ERRORS.required("type")),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormProps>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    const payload: TAddProductPayload = {
      code: data.code,
      type: data.type,
    };

    const response = await mutateAsync(payload);
    if (response?.responseDto?.code === SUCCESS_CODE) {
      openNotification("success", response?.responseDto?.message, "top-center");
      reset();
      onClose();
      return;
    }
  };

  useEffect(() => {
    if (!product) return;
    setValue("code", product?.code);
    setValue("type", product?.type);
  }, [product, setValue]);

  return (
    <Drawer
      opened={isProductDrawerOpen}
      onClose={onClose}
      position="right"
      size={isMobile ? "80%" : "md"}
      title={<ModalTitle title="Edit Product" />}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3 relative"
      >
        <LoadingOverlay isLoading={isSubmitting || isPending} />

        <TextInput
          placeholder="Enter code"
          radius={8}
          {...register("code")}
          error={errors.code?.message}
          autoFocus
        />

        <TextInput
          placeholder="Enter type"
          radius={8}
          {...register("type")}
          error={errors.type?.message}
        />

        <PrimaryButton type="submit" disabled={!isValid}>
          Update
        </PrimaryButton>
      </form>
    </Drawer>
  );
}
