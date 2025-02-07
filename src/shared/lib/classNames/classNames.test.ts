import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with additional class", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
      "someClass class1 class2"
    );
  });
  test("with all params", () => {
    expect(
      classNames(
        "someClass",
        { hovered: true, scrollable: true, isVisible: false },
        ["class1", "class2"]
      )
    ).toBe("someClass class1 class2 hovered scrollable");
  });
  test("with undefined in mods", () => {
    expect(
      classNames("someClass", { hovered: true, scrollable: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe("someClass class1 class2 hovered");
  });
});
