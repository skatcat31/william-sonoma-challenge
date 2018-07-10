/**
 * List style element. Extracted to keep list.module short
 */
const style = document.createElement('style');
style.textContent = `
  .responsive-children {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 33%;
    justify-content: center;
    z-index: 1;
  }
  .wide {
    width: 30%;
    min-width: 300px;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
  }
  .center-items-text {
    text-align: center;
    align-items: center;
  }
  .no-bullets {
    list-style: none;
    padding-left: 0%;
  }
`;

export default style;
