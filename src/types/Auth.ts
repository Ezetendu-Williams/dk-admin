export type TResponseDto = {
  code: string;
  message: string;
};

export type TLoginPayload = {
  userName: string;
  password: string;
};

export type TLoginResponse = {
  responseDto: TResponseDto;
  token: string;
  emailAddress: string;
  userName: string;
};

export type TLogoutResponse = {
  resp: TResponseDto;
  firstTimeLogin: boolean;
};
