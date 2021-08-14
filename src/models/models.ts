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
    nutrientNumber: string;
    unitName: string;
    value: number;
}

export interface IDailyValue extends INutrient {
    nutrientId: number;
    value: number;
    unitName: string;
}