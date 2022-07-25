import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

test("renders counter", () => {
  render(<Counter />);
  const linkElement = screen.getByText(/Current value/i);
  expect(linkElement).toBeInTheDocument();
});
