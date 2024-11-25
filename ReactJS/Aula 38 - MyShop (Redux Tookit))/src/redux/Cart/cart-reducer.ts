import { Product } from '../../data/products';

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

interface CartAction {
  type: string;
  payload: Product;
}

export function cartReducer(state = initialState, action: CartAction){
  switch(action.type){
    case 'cart/add-product':
      return {
        ...state,
        cart: [
          ...state.cart,
          action.payload, // Produto que se deseja adicionar ao carrinho.
        ],
      };

    case 'cart/remove-product':
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter((product) => product.id !== productToRemove.id);

      return {
        ...state,
        cart: cartFiltered,
      };

    default:
      return state;
  }
}