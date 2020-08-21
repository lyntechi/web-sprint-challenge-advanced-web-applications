import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth as mocksAxios } from "./axiosWithAuth";

jest.mock("./axiosWithAuth");
const testData = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc",
      },
      id: 2,
    },
  ],
};

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mocksAxios.mockResolvedValueOnce(testData);
  const { debug } = render(<BubblePage />);
  debug();
});
