const createMessage = (products: ProductInCart[]) => {
  const finalPrice = products.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0
  );
  const productNames = products.map((prod) => prod.name).join("\n");

  const message = `
    Hola D&F! 🍷. \n
    *Quiero pedir:*
    _${productNames}_ \n
    *PRECIO FINAL: $${finalPrice}*
    ¡Muchas gracias!
  `;

  return encodeURIComponent(message);
};

export { createMessage };
