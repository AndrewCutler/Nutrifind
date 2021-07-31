import axios, { AxiosResponse } from 'axios';
import { ResponseData } from '../models/models';

const baseUrl = (term: string): string => `https://api.nal.usda.gov/fdc/v1/foods/search?query=${term}&pageSize=10&api_key=`
const key = 'r009ldhSE0vUCHfXM2bgGQNIekWLWFdkSr0VipuE'

export const search = (term: string): Promise<AxiosResponse<ResponseData>> => {
    // todo: https://github.com/slorber/awesome-debounce-promise
    return axios.get(baseUrl(term) + key).then((response: AxiosResponse<ResponseData>) => {
        return response;
    })
};
