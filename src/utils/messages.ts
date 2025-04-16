const createMessage = (product: Product) => {
  const message = `
    Hola D&F! 🍷. \n
    *Quiero pedir:*
    _${product.name}_ *$${product.price}*
    ¡Muchas gracias!
  `;

  return encodeURIComponent(message);
};

export { createMessage };
