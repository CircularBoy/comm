export type RegistrationPayload = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type RegistrationResponse = {
  email: string;
  id: string;
  accessToken: string;
};

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}
