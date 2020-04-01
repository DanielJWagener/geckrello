import { shallow, mount } from "enzyme";
import React from "react";
import AddBoard from "./add-board.component";
import Root from "../../Root";

it("renders AddBoard component", () => {
  expect(
    shallow(
      <Root>
        <AddBoard />
      </Root>
    )
  ).toMatchSnapshot();
});

// Prompt mode tests
describe("AddBoard prompt mode rendering", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <AddBoard />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has one button", () => {
    expect(wrapped.find("button").length).toEqual(1);
  });

  it("has no inputs", () => {
    expect(wrapped.find("input").length).toEqual(0);
  });
});

describe("AddBoard prompt mode functionality", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <AddBoard />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it("has a button that toggles mode", () => {
    // Toggle mode
    wrapped.find("button").simulate("click");

    // Now, in input mode:
    expect(wrapped.find("form").length).toEqual(1);
  });
});

// Input mode tests
describe("AddBoard input mode rendering", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <AddBoard />
      </Root>
    );

    // Toggle mode
    wrapped.find("button").simulate("click");
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

describe("AddBoard input mode functionality", () => {
  let wrapped;
  let inputText;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <AddBoard />
      </Root>
    );
    inputText = "New Board";

    // Toggle mode, then input some text
    wrapped.find("button").simulate("click");
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
    wrapped.find("button").simulate("click");

    expect(wrapped.find("input[type='text']").prop("value")).toEqual("");
  });

  it("has a button that toggles mode", () => {
    // Toggle mode:
    wrapped.find("button").simulate("click");

    // Now, in prompt mode:
    expect(wrapped.find("form").length).toEqual(0);
  });
});
