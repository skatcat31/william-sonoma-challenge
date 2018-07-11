import loaderModule from '../modules/loader.module.js';

const tests = [
  // LoaderModule is the default export
  !!loaderModule,

  // LoaderModule is a Node
  loaderModule instanceof Node

];

const testContainer = document.createElement('div');
testContainer.innerHTML = `<pre>
  Testing the LoaderModule:

    LoaderModule is the default export: ${tests[0]}
    LoaderModule is a Node: ${tests[1]}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

testContainer.tests = tests;

export default testContainer;
