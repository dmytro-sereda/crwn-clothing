export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((i) => i.id === cartItemToAdd.id);

  if (existingCartItem)
    return cartItems.map((i) =>
      i.id === cartItemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
    );

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((i) => i.id === cartItemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((i) => i.id !== cartItemToRemove.id);
  } else {
    return cartItems.map((i) =>
      i.id === cartItemToRemove.id ? { ...i, quantity: i.quantity - 1 } : i
    );
  }
};
