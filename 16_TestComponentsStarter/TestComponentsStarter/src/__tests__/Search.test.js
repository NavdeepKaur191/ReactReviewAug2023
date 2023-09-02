/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";
import { StaticRouter } from "react-router-dom/server";
import { UserContext } from "../context/UserContext";

test("displays the correct Context Value", async function () {
  // ARRANGE
  const wrapper = function ({ children }) {
    const userInfo = {
      userId: 1,
      userName: "Maria Klawe",
    };
    return (
      <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    );
  };
  render(
    <StaticRouter>
      <Search />
    </StaticRouter>,
    { wrapper },
  );
  // ACT
  const welcomeUser = await screen.getByText(/^Welcome,/).textContent;

  // ASSERT
  expect(welcomeUser).toBe("Welcome, Maria Klawe");
});
