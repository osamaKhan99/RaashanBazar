const initialState = {
  product: [],
  total: 0,
};

const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('added');
      return {
        ...state,
        product: state.product.map(item =>
          item.id === action.id
            ? { ...item, selected: true, total: state.total + item.price }
            : item
        ),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        product: state.product.map(item =>
          item.id === action.id
            ? {
                ...item,
                selected: false,
                quantity: 1,
                total: state.total !== 0 ? state.total - item.price : 0,
              }
            : item
        ),
      };
    case 'INCREASE_CART':
      return {
        ...state,
        product: state.product.map(item =>
          item.id === action.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: state.total + item.price,
              }
            : item
        ),
      };
    case 'DECREASE_CART':
      return {
        ...state,
        product: state.product.map(item =>
          item.id === action.id
            ? {
                ...item,
                quantity: item.quantity !== 1 ? item.quantity - 1 : 1,
                total: state.total - item.price,
              }
            : item
        ),
      };
    case 'EMPTY_CART':
      return {
        ...state,
        product: state.product.map(item =>
          item.id === action.id
            ? { ...item, selected: true, quantity: 1, total: 0 }
            : item
        ),
      };
    default:
      return state;
  }
};
export default shoppingCart;
