import { httpApi } from 'api/config/http.api';
import { AxiosResponse } from 'axios';
import { IIngredients } from 'interfaces/IIngredients';

export const ingredientsApi = (): Promise<AxiosResponse<IIngredients[]>> => httpApi.get('ingredients');
