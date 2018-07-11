import listStyle from '../modules/products/list.style.js';

const tests = [
  // listStyle is the default export
  !!listStyle,

  // listStyle is a node
  listStyle instanceof Node,

  // liststyle is a style tage
  listStyle.tagName === 'STYLE'
];

const testContainer = document.createElement('div');
testContainer.innerHTML = `<pre>
  Testing the Products ListStyle:

    ListStyle is the default export: ${tests[0]}
    ListStyle is a Node: ${tests[1]}
    ListStyle is a style tag: ${tests[2]}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

testContainer.tests = tests;

export default testContainer;
