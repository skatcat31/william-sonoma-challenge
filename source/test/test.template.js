// import module from 'file';

// tests that require try catch blocks
let test1;

try {
  module.shouldFail // eslint-disable-line
} catch (error) {
  test1 = true;
}

// simple tests can be directly inserted into the array
const tests = [
  module !== undefined,
  test1
];

// the container to export
const testContainer = document.createElement('div');

// The pregenerated text that should include your tests description and results
testContainer.innerHTML = `<pre>
  Testing the Module:

    The Module is not undefined: ${tests[0]}
    The module should faile: ${tests[1]}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

// we want the raw results for display purposes in the main testing display
testContainer.tests = tests;

// export it
export default testContainer;
