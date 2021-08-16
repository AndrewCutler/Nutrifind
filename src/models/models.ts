export interface IResponseData {
    foods: IFood[];
    totalHits: number;
}

export interface IFood {
    description: string;
    fdcId: number;
    foodCategory: string;
    foodNutrients: INutrient[];
}

export interface INutrient {
    nutrientId: number;
    nutrientName: string;
    nutrientNumber?: string;
    unitName: string;
    value?: number;
}

export interface INutrientGetResponse {
    id: number;
    name: string;
    unitName: string;
}

export interface IFoodNutrientGetResponse {
    amount: number;
    id: number;
    nutrient: INutrientGetResponse;
}

export interface IFoodGetResponse {
    fdcId: number;
    foodNutrients: IFoodNutrientGetResponse[];
}