// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Spinner from "./Spinner";

test("sanity", () => {
  render(<Spinner on={true} />);

  let spinnerText = screen.getByText("Please wait...");

  expect(spinnerText).toBeInTheDocument();
  expect(spinnerText).toHaveTextContent(/Please wait.../i);
});
