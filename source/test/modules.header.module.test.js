import headerModule from '../modules/header.module.js';

const props = {
  title: 'Robert Mennell Unit Tests',
  container: 'header'
};

const propsNoContainer = {
  title: 'test'
};

let noContainer;
try {
  headerModule(propsNoContainer);
} catch (error) {
  noContainer = true;
}

let noTitle;
try {
  headerModule({});
} catch (error) {
  noTitle = true;
}

const tests = [
  // HeaderModule is the default export
  !!headerModule,

  // HeaderModule is a function
  typeof headerModule === 'function',

  // HeaderModule requires 1 argument
  headerModule.length === 1,

  // HeaderModule will crash if the props does not provide a title
  noTitle,

  // HeaderModule will crash if the props does not provide a container
  noContainer,

  // HeaderModule returns a Node
  headerModule(props) instanceof Node

];

const testContainer = document.createElement('div');
testContainer.innerHTML = `<pre>
  Testing the HeaderModule:

    HeaderModule is the default export: ${tests[0]}
    HeaderModule is a function: ${tests[1]}
    HeaderModule requires 1 argument: ${tests[2]}
    HeaderModule requires a name property on the argument: ${tests[3]}
    HeaderModule requires a hero property with an href property: ${tests[4]}
    HeaderModule returns a Node: ${tests[5]}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

testContainer.tests = tests;

export default testContainer;
