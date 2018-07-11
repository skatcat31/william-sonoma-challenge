/**
 * Main Buisiness Logic
 * Written by Robert Mennell
 *
 * Merely loads dependancies and associated calsses with their containers and codependancies
 */

// Dependancies
import ProductsList from './modules/products/list.class.js';
import SlideShow from './modules/slideShow.class.js';
import Header from './modules/header.module.js';
import staticJSON from './modules/static';

// Initiation
const slideShow = new SlideShow({
  container: 'slideshow'
});

const main = new ProductsList({
  container: 'container',
  slideShow
});

Header({
  title: 'William Sonoma Catalog',
  container: 'header'
});

fetch(
  // Hopefully they enable CORS
  'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
)
  .then(res => res.json())

  // If they have not enabled CORS
  // use included reverse proxy server to serve JSON file
  .catch(() => fetch('./products').then(products => products.json())) // eslint-disable-line no-console

  // If the server has gone down for some reason
  // or they actually removed the JSON file
  // load static version of data file since they webpage doesn't seem to accept CORS requests
  .catch(() => staticJSON) // eslint-disable-line no-console
  .then(products => main.setState({ products }));
