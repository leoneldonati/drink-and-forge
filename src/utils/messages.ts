const createMessage = (products: ProductInCart[], finalPrice: string) => {
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
