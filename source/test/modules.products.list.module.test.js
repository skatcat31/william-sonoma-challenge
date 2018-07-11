import listModule from '../modules/products/list.module.js';

// list module is the default export
const isDefault = !!listModule;

// list module should be a function
const isFunction = typeof listModule === 'function';

// it should accept two arguments
const lengthOf2 = listModule.length === 2;

// it will error if no products are sent to it
let noArgsFail;
try {
  listModule();
  noArgsFail = false;
} catch (error) {
  noArgsFail = true;
}

// it will error if the second argument does not expose setState as a function
let setState;
try {
  listModule([], {});
} catch (error1) {
  try {
    listModule([], { setState: 'test' });
  } catch (error2) {
    try {
      listModule([], { setState: String });
      setState = true;
    } catch (error3) {
      setState = false;
    }
  }
}

// it will error if a non traversable is sent as the first argument
let notFirstArray;
try {
  listModule({});
} catch (error) {
  notFirstArray = true;
}

// it will return a node
const returnType = listModule([], { setState: String }) instanceof Node;

const tests = [
  setState,
  isDefault,
  isFunction,
  lengthOf2,
  noArgsFail,
  notFirstArray,
  returnType
];

const testContainer = document.createElement('div');
testContainer.innerHTML = `<pre>
  Testing the Products ListModule:

    ListModule is the default export: ${isDefault}
    ListModule is a function: ${isFunction}
    ListModule accepts two arguments: ${lengthOf2}
    ListModule will throw when no arguments are passed: ${noArgsFail}
    ListModule will throw if the first argument passed is not an array: ${notFirstArray}
    listModule will throw if the second argument does not expose a setState function: ${setState}
    ListModule will return a Node: ${returnType}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

testContainer.tests = tests;

export default testContainer;
