import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio navigation and key sections", () => {
  render(<App />);
  expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /resume/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /contact/i })).toBeInTheDocument();
});
