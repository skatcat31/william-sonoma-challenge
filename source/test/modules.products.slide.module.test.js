import slideModule from '../modules/products/slide.module.js';

const product = {
  name: 'test2',
  priceRange: {
    selling: {
      low: 1,
      high: 2
    }
  },
  hero: {
    href: 'test2'
  }
};

const productNoHero = {
  name: 'test'
};

let noHero;
try {
  slideModule(productNoHero);
} catch (error) {
  noHero = true;
}

let noName;
try {
  slideModule({});
} catch (error) {
  noName = true;
}

const tests = [
  // slideModule is the default export
  !!slideModule,

  // slideModule is a function
  typeof slideModule === 'function',

  // slideModule requires 1 argument
  slideModule.length === 1,

  // slideModule will crash if the product does not provide a name
  noName,

  // slideModule will crash if the product does not provide a hero
  noHero,

  // slideModule returns a Node
  slideModule(product) instanceof Node

];

const testContainer = document.createElement('div');
testContainer.innerHTML = `<pre>
  Testing the Product SlideModule:

    SlideModule is the default export: ${tests[0]}
    SlideModule is a function: ${tests[1]}
    SlideModule requires 1 argument: ${tests[2]}
    SlideModule requires a name property on the argument: ${tests[3]}
    SlideModule requires a hero property with an href property: ${tests[4]}
    SlideModule returns a Node: ${tests[5]}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

testContainer.tests = tests;

export default testContainer;
