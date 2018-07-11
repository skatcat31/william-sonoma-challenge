// import module from 'file';
import staticFile from '../modules/static.js';

// simple tests can be directly inserted into the array
const tests = [
  // static is the default export
  staticFile !== undefined,

  // static is a plain old object
  staticFile.prototype === undefined,

  // has a groups reference and it's an Array
  Array.isArray(staticFile.groups),

  // each "group" has a name, and a "hero"
  staticFile.groups.length === staticFile.groups.filter(
    product => product.name && product.hero && product.hero.href
  ).length,

  // each product has an images array with a href reference
  staticFile.groups.length === staticFile.groups.filter(
    product => product.images
    && product.images.filter(image => image.href).length
  ).length,
];

// the container to export
const testContainer = document.createElement('div');

// The pregenerated text that should include your tests description and results
testContainer.innerHTML = `<pre>
  Testing the Static JSON file obtained from the provided link for challenge:

    The Static file is the default export: ${tests[0]}
    The Static file is an Object Literal: ${tests[1]}
    The Static file has .groups and it is an Array: ${tests[2]}
    Each product listing in the .groups reference has a name, a hero with href: ${tests[3]}
    Each product listing has an array of images and each image has an href: ${tests[4]}


  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

// we want the raw results for display purposes in the main testing display
testContainer.tests = tests;

// export it
export default testContainer;
