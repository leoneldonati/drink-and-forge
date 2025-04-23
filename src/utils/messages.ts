const createMessage = (products: ProductInCart[], finalPrice: string) => {
  const orders = products
    .map(({ selectedFlavors, quantity, name }) => {
      const flavors = selectedFlavors.join(", ");
      return `*${quantity}* - ${name} - _${flavors}_`;
    })
    .join("\n");
  const message = `
    Hola D&F! 🍷. \n
    Quiero pedir:
    ${orders} \n
    *PRECIO FINAL: $${finalPrice}*
    ¡Muchas gracias!
  `;

  return encodeURIComponent(message);
};

export { createMessage };
