// dependancies
import style from './list.style.js';
import productSlide from './slide.module.js';
import previewStyle from './slide.style.js';

/**
 * Generates a flex list of Product Tiles
 * @param {Array<Object>} products An array of Products information
 * @param {SlideShow} slideShow Peer dependancy from parent passed for click handlers
 */
function productsList(products, slideShow) {
  // crash on missing setState function
  if (typeof slideShow.setState !== 'function') throw new TypeError('The slideShow must expose a setState function');

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
    if (product.images && product.images.length) {
      item.onclick = () => slideShow.setState({ images: product.images });
    }
    item.appendChild(productSlide(product));
    return parent.appendChild(item);
  });

  return parent;
}

export default productsList;
