import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import Users from "../component/Users";
import axios from "axios";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserPage from "../pages/UserPage";
import AppRouter from "../router/AppRouter";
jest.mock("axios");

describe("Users test", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  test("Users render", () => {
    render(<Users />);
  });
  test("fetch users", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockReturnValue(response);
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/:id" element={<UserPage />} />
        </Routes>
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-name");
    expect(users.length).toBe(3);
  });

  test("redirect to user`s page", async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockReturnValue(response);
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <AppRouter />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-name");
    await userEvent.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
