import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productsList from "../../data/products.json";
import categoriesList from "../../data/categories.json";
import { Category, ProductData } from "../../components/types"; 

const convertedCategories: Category[] = categoriesList as Category[];

interface ShopState {
  value: {
    categorySelected: string;
    productIdSelected: number | null;
    categories: Category[];
    products: ProductData[];
  };
}

const initialState: ShopState = {
  value: {
    categorySelected: '',
    productIdSelected: null,
    categories: convertedCategories,
    products: productsList as ProductData[],
  },
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCategorySelected: (state, action: PayloadAction<string>) => {
      state.value.categorySelected = action.payload;
    },
    setProductIdSelected: (state, action: PayloadAction<number | null>) => {
      state.value.productIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;
