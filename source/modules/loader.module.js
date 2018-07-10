// Static loader animation with a single dot instead of three
// Adapted from 30 Seconds of CSS at https://atomiks.github.io/30-seconds-of-css/

// This should only be used once or the style element will cause conflicts

/**
 * Static style element
 */
const style = document.createElement('style');
style.textContent = `
  @keyframes bouncing-loader {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0.1;
      transform: translateY(-1rem);
    }
  }
  .bouncing-loader {
    display: flex;
    justify-content: center;
  }
  .bouncing-loader > div {
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: #8385aa;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
  }
  .centered {
    position: fixed;
    top: 40%;
    left: 50%;
  }
`;

/**
 * Child element that contains the animation target
 */
const loader = document.createElement('div');
loader.classList.add('bouncing-loader');
loader.classList.add('centered');
loader.appendChild(document.createElement('div'));

/**
 * The container for the animation
 */
const container = document.createElement('div');
container.appendChild(style);
container.appendChild(loader);

export default container;
