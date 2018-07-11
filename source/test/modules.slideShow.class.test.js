// import module from 'file';
import SlideShow from '../modules/slideShow.class.js';

// tests that require try catch blocks
let isClass;
try {
  SlideShow();
} catch (error) {
  isClass = true;
}

let badPropsNoContainer = {};
try {
  new SlideShow(badPropsNoContainer); // eslint-disable-line
  badPropsNoContainer = false;
} catch (error) {
  badPropsNoContainer = true;
}

let goodProps = {
  container: 'slideShow'
};
let slideshow;
try {
  slideshow = new SlideShow(goodProps); // eslint-disable-line
  goodProps = slideshow instanceof SlideShow;
} catch (error) {
  goodProps = false;
}

// exposes a setState function that causes reRender
let reRender;
try {
  slideshow.setState({ test: 'will not cause render because no images' });
  reRender = true;
} catch (error) {
  reRender = false;
}

// exposes method to force a show of current state
let show;
try {
  slideshow.show();
  show = true;
} catch (error) {
  show = false;
}

// exposes method to force a hide of the current slideShow
let hide;
try {
  slideshow.hide();
  hide = true;
} catch (error) {
  hide = false;
}

// simple tests can be directly inserted into the array
const tests = [
  SlideShow !== undefined,
  isClass,
  badPropsNoContainer,
  goodProps,
  reRender,
  show,
  hide
];

// the container to export
const testContainer = document.createElement('div');

// The pregenerated text that should include your tests description and results
testContainer.innerHTML = `<pre>
  Testing the SlideShow:

    The SlideShow is the default export: ${tests[0]}
    The SlideShow is a Class: ${tests[1]}
    The SlideShow will crash if not passed a mounting point: ${tests[2]}
    The slideShow returns and instance of itself: ${tests[3]}
    The SlideShow will render when state is updated: ${tests[4]}
    The SlideShow will render when SlideShow.render is called: ${tests[5]}
    The SlideShow will hide when SlideShow.hide is called: ${tests[6]}

  # of tests: ${tests.length}
  # passed: ${tests.filter(a => a).length}
  # failed: ${tests.filter(a => !a).length}

  ----------------------------------------

</pre>`;

// we want the raw results for display purposes in the main testing display
testContainer.tests = tests;

// export it
export default testContainer;
