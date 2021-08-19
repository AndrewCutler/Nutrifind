import axios, { AxiosResponse } from 'axios';
import { IFood, INutrient, IResponseData } from '../models/models';

const key = 'r009ldhSE0vUCHfXM2bgGQNIekWLWFdkSr0VipuE'
const searchUrl = (term: string): string => `https://api.nal.usda.gov/fdc/v1/foods/search?query=${term}&pageSize=10&api_key=`
const foodsUrl = (fdcIds: string[]): string => `https://api.nal.usda.gov/fdc/v1/foods?fdcIds=${fdcIds.map((id) => id).join(',')}&api_key=`

export const search = (term: string): Promise<AxiosResponse<IResponseData>> => {
    // todo: https://github.com/slorber/awesome-debounce-promise
    return axios.get(searchUrl(term) + key).then((response: AxiosResponse<IResponseData>) => {
        return response;
    })
};


export const getFoodsByFdcIds = (fdcIds: string[]): Promise<AxiosResponse> => {
    return axios.get(foodsUrl(fdcIds) + key).then((response: AxiosResponse) => {
        return response;
    })
}

export const generateUrl = (foods: IFood[], selectedNutrients: INutrient[]): string => {
    const url = new URL(document.URL);

    foods.forEach((f) => {
        url.searchParams.append('fdcId', f.fdcId.toString());
    });
    selectedNutrients.forEach((n) => {
        url.searchParams.append('nutrientId', n.nutrientId.toString());
    });

    return url.toString();
}
