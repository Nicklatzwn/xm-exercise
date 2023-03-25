import { httpApi } from 'api/config/http.api';
import { AxiosResponse } from 'axios';
import { ILoginRequest } from 'interfaces/ILoginRequest';
import { ILoginResponse } from 'interfaces/ILoginResponse';

export const loginApi = (data: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> => {
  const { name, password } = data;
  return httpApi.post('login', { name, password });
};
