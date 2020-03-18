import { writable } from "svelte/store";

const createCart = () => {
  const initialState = {
    items: [],
    itemCount: {},
    total: 0
  };
  const { subscribe, set, update } = writable(initialState);

  const addItemToCart = item =>
    update(store => {
      const { items, itemCount, total } = store;
      const newItems = [...items];
      if (items.findIndex(product => product.id === item.id) === -1) {
        newItems.push(item);
      }
      return {
        ...store,
        items: newItems,
        itemCount: {
          ...itemCount,
          [item.id]: itemCount[item.id] ? itemCount[item.id] + 1 : 1
        },
        total: total + 1
      };
    });

  const removeItemFromCart = id =>
    update(store => {
      const { items, itemCount } = store;
      const newItems = [...items];
      const index = items.findIndex(item => item.id === id);
      newItems.splice(index, 1);
      return {
        ...store,
        items: newItems,
        itemCount: {
          ...itemCount,
          [id]: itemCount[id] > 0 ? itemCount[id] - 1 : 0
        },
        total: total - 1
      };
    });

  const clearCart = () => {
    set(initialState);
  };

  return {
    subscribe,
    addItemToCart,
    clearCart,
    removeItemFromCart
  };
};

export const cart = createCart();
