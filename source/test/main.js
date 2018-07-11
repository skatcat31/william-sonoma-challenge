// tests for modules/products
import listModule from './modules.products.list.module.test.js';
import listStyle from './modules.products.list.style.test.js';
import slideModule from './modules.products.slide.module.test.js';
import slideStyle from './modules.products.slide.style.test.js';
import headerModule from './modules.header.module.test.js';
import loaderModule from './modules.loader.module.test.js';
import listClass from './modules.products.list.class.test.js';
import slideShowClass from './modules.slideShow.class.test.js';
import staticFile from './modules.static.test.js';

const tests = [
  listClass,
  listModule,
  listStyle,
  slideModule,
  slideStyle,
  headerModule,
  loaderModule,
  slideShowClass,
  staticFile,
];

let testsTotal = 0;
let testsPassed = 0;
let testsFailed = 0;

const container = document.getElementById('tests');

tests.forEach((testContainer) => {
  container.appendChild(testContainer);

  testContainer.tests.forEach((test) => {
    testsTotal += 1;
    if (test) {
      testsPassed += 1;
    } else {
      testsFailed += 1;
    }
  });
});

const totalTests = document.createElement('pre');
totalTests.innerText = `
  Total for all Tests:

    Total number of tests performed: ${testsTotal}
    Total number of tests passed: ${testsPassed}
    Total number of tests failed: ${testsFailed}

    Percentage of tests passed: ${(testsPassed / testsTotal) * 100}%
`;

// remove all required mounting points
let remove = document.getElementById('header');
remove.parentNode.removeChild(remove);

remove = document.getElementById('list');
remove.parentNode.removeChild(remove);

remove = document.getElementById('slideShow');
remove.parentNode.removeChild(remove);

container.appendChild(totalTests);
