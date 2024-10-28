import { Button, Select } from "@mantine/core";
import { FiPlusCircle, FiSearch } from "react-icons/fi";
import useIsMobile from "../../hooks/custom/useIsMobile";
import { ChangeEvent } from "react";

interface TProductTitle {
  btnText: string;
  handleClick: () => void;
  searchValue: string;
  searchOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  selectValue: string;
  selectData: string[] | undefined;
  selectOnChange: (e: string | null) => void;
  filterText: string;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProductTitle({
  btnText,
  handleClick,
  searchOnChange,
  searchValue,
  selectOnChange,
  selectValue,
  selectData,
  filterText,
  onFocus,
}: TProductTitle) {
  const { isMobile } = useIsMobile();

  return (
    <div className="w-full md:h-[7vh] h-[10vh] flex md:flex-row flex-col gap-2 items-center justify-between">
      <Button
        leftSection={
          <FiPlusCircle size={15} color={isMobile ? "#fff" : "#e80e0f"} />
        }
        fullWidth={isMobile}
        variant={isMobile ? "filled" : "transparent"}
        color={isMobile ? "#e80e0f" : "white"}
        className="click_btn"
        onClick={handleClick}
      >
        <span className={`${isMobile ? "text-white" : "text-primaryRed"}`}>
          {btnText}
        </span>
      </Button>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-[8px] w-[170px] h-[33.75px] border border-[#ced4da] focus:border-[#228be6] text-[11px] px-2">
          <FiSearch className="text-[#888] text-[16px]" />
          <input
            type="search"
            value={searchValue}
            onChange={searchOnChange}
            onFocus={onFocus}
            placeholder="search products..."
            className="w-full border-0 outline-0"
          />
        </div>

        <div className="flex items-center gap-2">
          <h6 className="md:flex hidden text-muted-200">Display</h6>
          <Select
            data={selectData}
            radius={8}
            value={selectValue}
            onChange={selectOnChange}
            defaultValue={"all"}
            className="capitalize"
          />
          <h6 className="md:flex hidden text-muted-200">{filterText}</h6>
        </div>
      </div>
    </div>
  );
}
