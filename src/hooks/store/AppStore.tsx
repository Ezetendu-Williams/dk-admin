import { create } from "zustand";

interface TAppStoreProps {
  isSidenavOpen: boolean;
  setIsSidenavOpen: (state: boolean) => void;
  isLogoutOpen: boolean;
  setIsLogoutOpen: (state: boolean) => void;
  isProductDrawerOpen: boolean;
  setIsProductDrawerOpen: (state: boolean) => void;
  isAddProductDrawerOpen: boolean;
  setIsAddProductDrawerOpen: (state: boolean) => void;

  isProductCategoryDrawerOpen: boolean;
  setIsProductCategoryDrawerOpen: (state: boolean) => void;
  isAddProductCategoryDrawerOpen: boolean;
  setIsAddProductCategoryDrawerOpen: (state: boolean) => void;

  isProductDescriptionDrawerOpen: boolean;
  setIsProductDescriptionDrawerOpen: (state: boolean) => void;
  isAddProductDescriptionDrawerOpen: boolean;
  setIsAddProductDescriptionDrawerOpen: (state: boolean) => void;

  isCustomerDescriptionDrawerOpen: boolean;
  setIsCustomerDescriptionDrawerOpen: (state: boolean) => void;
}

const useAppStore = create<TAppStoreProps>()((set) => ({
  isSidenavOpen: false,
  setIsSidenavOpen: (state) => set({ isSidenavOpen: state }),
  isLogoutOpen: false,
  setIsLogoutOpen: (state) => set({ isLogoutOpen: state }),
  isProductDrawerOpen: false,
  setIsProductDrawerOpen: (state) => set({ isProductDrawerOpen: state }),
  isAddProductDrawerOpen: false,
  setIsAddProductDrawerOpen: (state) => set({ isAddProductDrawerOpen: state }),

  isProductCategoryDrawerOpen: false,
  setIsProductCategoryDrawerOpen: (state) =>
    set({ isProductCategoryDrawerOpen: state }),
  isAddProductCategoryDrawerOpen: false,
  setIsAddProductCategoryDrawerOpen: (state) =>
    set({ isAddProductCategoryDrawerOpen: state }),

  isProductDescriptionDrawerOpen: false,
  setIsProductDescriptionDrawerOpen: (state) =>
    set({ isProductDescriptionDrawerOpen: state }),
  isAddProductDescriptionDrawerOpen: false,
  setIsAddProductDescriptionDrawerOpen: (state) =>
    set({ isAddProductDescriptionDrawerOpen: state }),

  isCustomerDescriptionDrawerOpen: false,
  setIsCustomerDescriptionDrawerOpen: (state) =>
    set({ isCustomerDescriptionDrawerOpen: state }),
}));

export default useAppStore;
