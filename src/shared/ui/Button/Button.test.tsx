import { render, screen } from "@testing-library/react";
import React from "react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  test("button render", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test("button has className frome theme", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
  test("button has className frome props", () => {
    render(
      <Button theme={ThemeButton.CLEAR} className="test">
        TEST
      </Button>
    );
    expect(screen.getByText("TEST")).toHaveClass("test");
  });
});
