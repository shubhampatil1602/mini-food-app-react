import { createContext } from 'react';

export const FoodDataContext = createContext({
  menu: { foods: [], topPicks: [] },
  cartMenu: [],
  addToCart: () => {},
  removeOneQantity: () => {},
  removeItem: () => {},
});
