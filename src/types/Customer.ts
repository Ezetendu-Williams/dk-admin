/* eslint-disable @typescript-eslint/no-explicit-any */
import { TResponseDto } from "./Auth";

export type TCustomerProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
  userName: string;
  phoneNumber: string;
  id: number;
};

export type TGetCustomersResponse = {
  responseDto: TResponseDto;
  userDto: any;
  userDtoList: TCustomerProps[];
};

export type TGetCustomersPayload = {
  pageSize: number;
  pageNo: number;
};

export type TGetCustomersByPageResponse = {
  responseDto: TResponseDto;
  userDto: any;
  userDtoList: TCustomerProps[];
};
