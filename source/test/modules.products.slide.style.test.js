import slideStyle from '../modules/products/slide.style.js';

const tests = [
  // slideStyle is the default export
  !!slideStyle,

  // slideStyle is a node
  slideStyle instanceof Node,

  // slidestyle is a style tage
  slideStyle.tagName === 'STYLE'
];

const testContainer = document.createElement('div');
testContainer.innerHTML = `<pre>
  Testing the Products SlideStyle:

    SlideStyle is the default export: ${tests[0]}
    SlideStyle is a Node: ${tests[1]}
    SlideStyle is a style tag: ${tests[2]}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

testContainer.tests = tests;

export default testContainer;
