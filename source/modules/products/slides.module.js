/**
 * Generates product cards for display
 * @param {Object} product The product to generate the card for
 */
function productSlides(product) {
  // the container
  const preview = document.createElement('div');
  preview.classList.add('img__container');

  // the hover
  const hover = document.createElement('div');
  hover.classList.add('img-middle');
  preview.appendChild(hover);

  // the text
  const text = document.createElement('div');
  text.classList.add('img__text');
  text.innerText = product.name;
  hover.appendChild(text);

  // the price
  if (product.priceRange && product.priceRange.selling) {
    const price = document.createElement('div');
    price.classList.add('img__text-no-top-pad');
    /* eslint-disable no-nested-ternary */
    price.innerText = product.priceRange.selling.low && product.priceRange.selling.high
      ? `$${product.priceRange.selling.low} - $${product.priceRange.selling.high}`
      : product.priceRange.selling.high
        ? `$${product.priceRange.selling.high}`
        : product.priceRange.selling.low
          ? `$${product.priceRange.selling.low}`
          : '$--';
    hover.appendChild(price);
  }

  // the image
  const img = document.createElement('img');
  img.setAttribute('src', product.hero.href);
  img.setAttribute('alt', product.name);
  img.classList.add('img__image');
  preview.appendChild(img);

  return preview;
}

export default productSlides;
