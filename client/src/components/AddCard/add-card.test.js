import { shallow, mount } from "enzyme";
import React from "react";
import AddCard from "./add-card.component";
import { AddCard as AddCardPure } from "./add-card.component";
import Root from "../../Root";

it("renders AddCard component", () => {
  expect(shallow(<AddCardPure />).debug()).toMatchSnapshot();
});

// Prompt mode tests
describe("AddCard prompt mode rendering", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <AddCard />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a div with class 'add-card__prompt'", () => {
    expect(wrapped.find(".add-card__prompt").length).toEqual(1);
  });

  it("has no inputs", () => {
    expect(wrapped.find("input").length).toEqual(0);
  });
});

describe("AddCard prompt mode functionality", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <AddCard />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a button that toggles mode", () => {
    // Toggle mode
    wrapped.find(".add-card__prompt").simulate("click");

    // Now, in input mode:
    expect(wrapped.find("form").length).toEqual(1);
  });
});

// Input mode tests
describe("AddCard input mode rendering", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <AddCard />
      </Root>
    );

    // Toggle mode
    wrapped.find(".add-card__prompt").simulate("click");
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a text input and submit input", () => {
    expect(wrapped.find("input[type='text']").length).toEqual(1);
    expect(wrapped.find("input[type='submit']").length).toEqual(1);
  });

  it("has a cancel button", () => {
    expect(wrapped.find("button").length).toEqual(1);
    expect(wrapped.find("button").text()).toEqual("Cancel");
  });
});

describe("AddCard input mode functionality", () => {
  let wrapped;
  let inputText;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <AddCard />
      </Root>
    );
    inputText = "New Card";

    // Toggle mode, then input some text
    wrapped.find(".add-card__prompt").simulate("click");
    wrapped.find("input[type='text']").simulate("change", {
      target: { value: inputText }
    });
    wrapped.update();
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a text field users can type into", () => {
    expect(wrapped.find("input[type='text']").prop("value")).toEqual(inputText);
  });

  it("clears the input field on submit", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    // Component automatically toggles back to prompt mode.
    // Toggle back to input:
    wrapped.find(".add-card__prompt").simulate("click");

    expect(wrapped.find("input[type='text']").prop("value")).toEqual("");
  });

  it("has a button that toggles mode", () => {
    // Toggle mode:
    wrapped.find("button").simulate("click");

    // Now, in prompt mode:
    expect(wrapped.find("form").length).toEqual(0);
  });
});
