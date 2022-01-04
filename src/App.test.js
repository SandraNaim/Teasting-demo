import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Factory function to create a shallowWrapper for the App component

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders withput error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,"component-app")
  expect(appComponent.length).toBe(1)
});

test('renders icrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increment-button")
  expect(button.length).toBe(1)
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,"counter-display")
  expect(counterDisplay.length).toBe(1)
});

test('counter display at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0")
});

test('clicking button increments counter', () => {
  const wrapper = setup();

  // find the button
  const button = findByTestAttr(wrapper, "increment-button");

  // click the button
  button.simulate('click');

  // find the display and test the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"decrement-button")
  expect(button.length).toBe(1)
});

test('clicking button decrement counter', () => {
  const wrapper = setup();

  // find and click the inc button
  const incButton = findByTestAttr(wrapper, "increment-button");
  incButton.simulate('click');

  // find and click the dec button
  const decButton = findByTestAttr(wrapper, "decrement-button");
  decButton.simulate('click');

  // find the display and test the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

describe("counter is 0 and decrement is clicked", () => {
  // using a describe here so I can use a "beforeEach" for shared setup

  // scoping wrapper to the describe, so it can be used in beforeEach and the tests
  let wrapper;
  beforeEach(() => {
    // no need to set counter value here; default value of 0 is good
    wrapper = setup();

    // find button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
  });
  test("error shows", () => {
    // check the class of the error message
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(false);
  });
  test("counter still displays 0", () => {
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
  test("clicking increment clears the error", () => {
    // find and click the increment button
    const incButton = findByTestAttr(wrapper, "increment-button");
    incButton.simulate("click");

    // check the class of the error message
    const errorDiv = findByTestAttr(wrapper, "error-message");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });
})