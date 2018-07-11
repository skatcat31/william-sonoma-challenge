import ListClass from '../modules/products/list.class.js';

// tests that require try catch blocks

// Since it's a class, it'll crash if we call it without new
let isClass;
try {
  ListClass();
} catch (error) {
  isClass = true;
}

// will cause a crash due to lack of peer dependancy
let badProps = {};
try {
  new ListClass(badProps); //eslint-disable-line
  badProps = false;
} catch (error) {
  badProps = true;
}

// will cause a crash when attempting to mount loader
let badPropsNoContainer = {
  slideShow: true
};
try {
  new ListClass(badPropsNoContainer); //eslint-disable-line
  badPropsNoContainer = false;
} catch (error) {
  badPropsNoContainer = true;
}

// will actually work
let goodProps = {
  container: 'list',
  slideShow: {
    setState: String
  }
};

let list;
try {
  list = new ListClass(goodProps);  //eslint-disable-line
  goodProps = list instanceof ListClass;
} catch (error) {
  goodProps = false;
}

// when sent products it will render the cards
let setState;
try {
  list.setState({ notProductsSoNoChangeFromLoad: true });
  setState = true;
} catch (error) {
  setState = false;
}

// simple tests can be directly inserted into the array
const tests = [
  // it is the default export
  ListClass !== undefined,

  // it is a class
  isClass,

  // It takes a simple props object and only 1 argument
  ListClass.length === 1,

  // It will crash if there is no peer dependancy
  badProps,

  // It will crash if there is no container
  badPropsNoContainer,

  // It will return an instance of itself
  goodProps,

  // It will render when passed products
  setState

];

// the container to export
const testContainer = document.createElement('div');

// The pregenerated text that should include your tests description and results
testContainer.innerHTML = `<pre>
  Testing the ListClass:

    ListClass is a class: ${tests[0]}
    ListClass constructor takes 1 argument: ${tests[1]}
    ListClass will crash if not given peer dependancy slideShow: ${tests[2]}
    ListClass will crash if not given container reference when it tries to render the laoding animation: ${tests[3]}
    ListClass will return an instance of itself: ${tests[4]}
    ListClass will rerender when setState is called with a new state: ${tests[5]}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

testContainer.tests = tests;

export default testContainer;
