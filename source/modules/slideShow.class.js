/**
 * Static style element that should be declared once and used with every instance
 */
const style = document.createElement('style');
style.innerText = `
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.9);
    text-align: center;
    align-items: center;
  }

  .modal > img {
    min-width: 20rem;
    min-height: 20rem;
    width: 25%;
  }

  .modal > indicator {

    padding-top: 0.5rem;
    color: white;
  }

  @media screen and (max-height: 500px) {
    .modal > indicator {
      position: fixed;
      top: 1rem;
      left: 1rem;
    }
  }
  
  @media screen and (min-height: 501px) {
    .modal > indicator {
      display: block;
      clear: both;
    }
  }

  .modal > text {
    display: block;
    clear: both;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 2rem;
  }
`;

/**
 * The slideshow for the Product List. Displays modal on click of image
 *
 * Should only be used once or style element will cause conflicts
 */
class SlideShow {
  /**
   * @param {Object} props An object instead of key order so that things always line up.
   * @param {String} props.container What id we should mount too
   */
  constructor(props) {
    if (!props.container) throw new TypeError('Props must contain a container reference');
    let container = document.getElementById(props.container);
    let index = 0;

    this.state = {};

    /**
     * Merges a state wit current state and causes a rerender.
     * @param {Object} newState The new state to be merged
     * @param {Array<Object>} newState.images An array of image meta
     * @param {String} images[].href A source for the image to be displayed
     */
    this.setState = (newState) => {
      if (newState === this.state || !Object.keys(newState).length) return;
      Object.assign(this.state, newState);
      index = 0;
      window.requestAnimationFrame(this.show);
    };

    /**
     * Opens the modal to the last stored index.
     *
     * Calls `this.hide()` to make sure the slate is clean for the rerender
     */
    this.show = () => {
      // clear it out
      this.hide();
      if (
        !this.state.images
        || !this.state.images[index]
        || !this.state.images[index].href
      ) return;
      container.appendChild(style);
      // setup the modal overlay
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.onclick = this.hide;
      container.appendChild(modal);

      // Create the note
      const note = document.createElement('text');
      note.innerText = 'Click image for next slide\nClick anywhere else to close';
      modal.appendChild(note);

      // create and attach the image
      const image = document.createElement('img');
      image.setAttribute('src', this.state.images[index].href);
      image.onclick = this.next;
      modal.appendChild(image);

      // What slide are we on
      const indicator = document.createElement('indicator');
      indicator.innerText = `${index + 1}/${this.state.images.length}`;
      modal.appendChild(indicator);
    };

    /**
     * Updates the private instance variable `index` and then calls `this.show()`
     * @param {Event} event The event object to be prevented from bubbling to the Modal
     */
    this.next = (event) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      index += 1;
      if (index >= this.state.images.length) index = 0;
      this.show();
    };

    /**
     * Closes the modal by replacing the node with an empty one
     */
    this.hide = () => {
      // Empty the show
      const newContainer = container.cloneNode();
      container.parentNode.replaceChild(newContainer, container);
      container = newContainer;
    };
  }
}

export default SlideShow;
