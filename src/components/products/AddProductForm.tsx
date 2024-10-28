import { Drawer, TextInput } from "@mantine/core";
import useAppStore from "../../hooks/store/AppStore";
import useIsMobile from "../../hooks/custom/useIsMobile";
import { useForm, SubmitHandler } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ERRORS from "../../data/Errors";
import PrimaryButton from "../custom/Buttons/PrimaryButton";
import LoadingOverlay from "../custom/Loader/LoadingOverlay";
import { TAddProductPayload } from "../../types/Products";
import { SUCCESS_CODE } from "../../data/Constants";
import ModalTitle from "../custom/ModalTitle/ModalTitle";
import { useAddProduct } from "../../hooks/api/products";
import openNotification from "../../utils/OpenNotification";

interface FormProps {
  code: string;
  type: string;
}

export default function AddProductForm() {
  const isAddProductDrawerOpen = useAppStore(
    (state) => state.isAddProductDrawerOpen
  );
  const setIsAddProductDrawerOpen = useAppStore(
    (state) => state.setIsAddProductDrawerOpen
  );
  const { isMobile } = useIsMobile();
  const { mutateAsync, isPending } = useAddProduct();

  const validationSchema = object().shape({
    code: string().required(ERRORS.required("code")),
    type: string().required(ERRORS.required("type")),
  });

  const {
    register,
    handleSubmit,
    reset,
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
      return;
    }
  };

  const onClose = () => {
    setIsAddProductDrawerOpen(false);
    reset();
  };

  return (
    <Drawer
      opened={isAddProductDrawerOpen}
      onClose={onClose}
      position="right"
      size={isMobile ? "80%" : "md"}
      title={<ModalTitle title="Add Product" />}
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
          Add
        </PrimaryButton>
      </form>
    </Drawer>
  );
}
