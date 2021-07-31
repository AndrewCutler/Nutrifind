export type ResponseData = {
    foods: Food[];
    totalHits: number;
}

export type Food = {
    description: string;
    fdcId: number;
    foodCategory: string;
    foodNutrients: Nutrient[];
}

export type Nutrient = {
    nutrientId: number;
    nutrientName: string;
    nutrientNumber: string;
    unitName: string;
    value: number;
}