import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserOverview from "../user-profile-details";
import { V1Users } from "@repo/api-lib";

describe("UserOverview", () => {
  const mockUser: V1Users = {
    username: "testuser",
    address: "123 Test St",
    rank: 1,
    gmStreak: 5,
    xp: 750,
    level: 7,
    avatarCid: "test",
  };

  it("renders user information correctly", () => {
    render(<UserOverview user={mockUser} />);

    expect(screen.getByText(mockUser.username)).toBeInTheDocument();
    expect(
      screen.getByText(`Address: ${mockUser.address}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Rank: ${mockUser.rank}`)).toBeInTheDocument();
    expect(
      screen.getByText(`GM Streak: ${mockUser.gmStreak}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`XP: ${mockUser.xp} | Level: ${mockUser.level}`)
    ).toBeInTheDocument();
  });

  it("renders XP progress correctly", () => {
    render(<UserOverview user={mockUser} />);

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute("aria-valuenow", "75");

    expect(screen.getByText("750/1000 XP")).toBeInTheDocument();
  });
});
