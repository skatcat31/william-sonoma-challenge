// dependancies
import style from './list.style.js';
import productSlide from './products.slides.module.js';
import previewStyle from './products.slides.style.js';

/**
 * Generates a flex list of Product Tiles
 * @param {Array<Object>} products An array of Products information
 * @param {SlideShow} slideShow Peer dependancy from parent passed for click handlers
 */
function productsList(products, slideShow) {
  // create a parent
  const parent = document.createElement('div');

  // register the child
  parent.appendChild(style);
  parent.appendChild(previewStyle);
  parent.classList.add('responsive-children');

  // Container
  const productInfo = document.createElement('div');
  productInfo.classList.add('wide');
  productInfo.classList.add('center-items-text');

  // Generate and register the cards
  products.forEach((product) => {
    const item = productInfo.cloneNode(true);
    item.onclick = () => slideShow.setState({ images: product.images });
    item.appendChild(productSlide(product));
    return parent.appendChild(item);
  });

  return parent;
}

export default productsList;
