/* eslint-disable @typescript-eslint/no-explicit-any */
import { TResponseDto } from "./Auth";

// =========================PRODUCT================
export type TProductResponseProp = {
  code: string;
  type: string;
  id: 14;
  createdOn: string;
  productDtoList: any;
};

export type TGetAllProductsResponse = {
  responseDto: TResponseDto;
  productDtoList: TProductResponseProp[];
};

export type TAddProductPayload = {
  code: string;
  type: string;
};

export type TAddProductResponse = {
  responseDto: TResponseDto;
  productDtoList: null;
};

// ================================PRODUCTCATEGORIES==========================

export type TProductCategoriesByPagePayload = {
  pageSize: number;
  pageNo: number;
};

export type TProductCategoriesProps = {
  category: string;
  code: string;
  productCode: string;
  id: number;
  version: number;
};

export type TGetAllProductCategoriesResponse = {
  responseDto: TResponseDto;
  productCategoryDtoList: TProductCategoriesProps[];
};

export type TAddProductCategoryPayload = {
  category: string;
  code: string;
  productCode: string;
};

export type TAddProductCategoryResponse = {
  responseDto: TResponseDto;
  productCategoryDtoList: any;
};

export type TUpdateProductCategoryPayload = TAddProductCategoryPayload;

export type TUpdateProductCategoryResponse = {
  responseDto: TResponseDto;
  productCategoryDtoList: null;
};

// =======================================Product Description ==================================

export type TProductDesriptionDocumentProps = {
  id: number;
  version: number;
  delFlag: string;
  createdOn: string;
  modifiedOn: string;
  imageUrl: string;
};

export type TProductDescriptionProps = {
  id: number;
  amount: number;
  description: string;
  currency: string;
  imageUrl: string;
  productCode: string;
  code: string;
  location: string;
  productCategoryCode: string;
  recent: any;
  multipartFile: any;
  productCodeList: any;
  productSize: string;
  price: any;
  multipartFileList: any;
  imagesList: TProductDesriptionDocumentProps[];
  availableQuantity: any;
  landDocs: any;
  percentageDiscount: string;
  landDoc: TProductDesriptionDocumentProps[];
  videoList: any;
};

export type TGetAllProductDescriptionPayload = {
  pageSize: number;
  pageNo: number;
  productCode: string;
};

export type TGetAllProductDescriptionsResponse = {
  responseDto: TResponseDto;
  productDescriptionDtoList: TProductDescriptionProps[];
};
