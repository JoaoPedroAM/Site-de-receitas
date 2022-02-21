export interface RecipeAPI extends Array<MealAPI>{}

export interface MealAPI {
    [x: string]: any;
    idMeal: string;
    strMeal: string;
    strDrinkAlternate?: any;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strMeasure16: string;
    strMeasure17: string;
    strMeasure18: string;
    strMeasure19: string;
    strMeasure20: string;
    strSource: string;
    strImageSource?: any;
    strCreativeCommonsConfirmed?: any;
    dateModified?: any;
}

export interface RecipeAPI {
    meals: MealAPI;
}

export interface Recipe{
    meals: Meal[];
}

export interface Meal {
    id: string;
    title: string;
    drinkAlternate?: any;
    category: string;
    area: string;
    instructions: string;
    thumbnail: string;
    tags: string;
    youtube: string;
    ingredients: Ingredient[];
    source: string;
    imageSource?: any;
    creativeCommonsConfirmed?: any;
    dateModified?: any;
}

export interface Ingredient {
    name: string;
    quantity: number; // quatidade, ex: 150
    unit: string; // tipo. ex: ml, g, kg
}