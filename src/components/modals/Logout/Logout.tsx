import { Button, Modal } from "@mantine/core";
import useAppStore from "../../../hooks/store/AppStore";
import { useLogout } from "../../../hooks/api/auth";
import LoadingOverlay from "../../custom/Loader/LoadingOverlay";

export default function LogoutModal() {
  const setIsLogoutOpen = useAppStore((state) => state.setIsLogoutOpen);
  const isLogoutOpen = useAppStore((state) => state.isLogoutOpen);
  const { mutateAsync, isPending } = useLogout();

  const handleClose = () => {
    setIsLogoutOpen(false);
  };

  const signOut = async () => {
    await mutateAsync();
    setIsLogoutOpen(false);
  };

  return (
    <Modal
      opened={isLogoutOpen}
      centered
      onClose={handleClose}
      withCloseButton={false}
      shadow="md"
      closeOnClickOutside={!isPending}
      closeOnEscape={!isPending}
      className="relative"
    >
      <LoadingOverlay isLoading={isPending} />
      <h3 className="text-center font-semibold text-[20px]">
        Are you sure you want to sign out?
      </h3>

      <div className="w-full flex items-center gap-2 mt-5">
        <Button fullWidth color="#e80e0f" onClick={handleClose}>
          No
        </Button>
        <Button fullWidth color="#4F46E5" onClick={signOut}>
          Yes
        </Button>
      </div>
    </Modal>
  );
}
