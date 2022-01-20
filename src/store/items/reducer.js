import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED, ITEM_REMOVED } from './actions'
let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Huge Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
  // ITEM ADDED
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload }
    return [...state, item]
  }
  // ITEM REMOVED
  if (action.type === ITEM_REMOVED) {
    return state.filter(item => item.uuid !== action.payload.uuid)
  }
  // ITEM PRICE UPDATED
  if (action.type === ITEM_PRICE_UPDATED) {
    return state.map(item => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, price: action.payload.price }
      }
      return item
    })
  }
  // ITEM QUANTITY UPDATED
  if (action.type === ITEM_QUANTITY_UPDATED) {
    return state.map(item => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, quantity: action.payload.quantity }
      }
      return item
    })
  }

  return state;
};

export default reducer;
