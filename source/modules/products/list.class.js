// dependancies
import loader from '../loader.module.js';
import productsList from './list.module.js';

/**
 * List Module
 * by Robert Mennell <rnmennell@gmail.com>
 *
 * This is a pure vanilla ES6 implimentation of rendering and state.
 * Requires a SlideShow to be passed down as a peer dependancy to the children so it can trigger it.
 * Any slideshow that exposes a 'setState' function is compatible
 */
class List {
  /**
   * @param {Object} props The property object. This ways key order doesn't matter
   * @param {Object} props.slideShow A slideShow to be called by the children
   */
  constructor(props) {
    this.state = {};

    // Dependancy checking on SlideShow instance
    if (!props.slideShow) throw new Error('Expected a slideShow key to be passed');

    // Mount
    let container = document.getElementById(props.container);

    /**
     * Merges a new state with the current state.
     *
     * Causes a rerender
     * @param {Object} newState The new state ot be merged with the previous state
     */
    this.setState = (newState) => {
      if (newState === this.state || !Object.keys(newState).length) return;
      Object.assign(this.state, newState);
      window.requestAnimationFrame(this.render);
    };

    /**
     * Renders the instance to the mounting point
     */
    this.render = () => {
      // Clear the inner with a spanking clean node
      const newContainer = container.cloneNode();
      container.parentNode.replaceChild(newContainer, container);
      container = newContainer;

      // If we don't have any products loaded we want to display the loader
      if (!this.state.products) return container.appendChild(loader);

      // Render the product catalog
      container.appendChild(productsList(this.state.products.groups, props.slideShow));
      return this;
    };

    // We want to render as part of initialiation
    this.render();
  }
}

export default List;
