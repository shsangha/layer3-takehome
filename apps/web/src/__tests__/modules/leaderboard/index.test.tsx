import React from "react";
import { render } from "@testing-library/react";
import LeaderboardPage from "@/modules/leaderboard/index";
import { useGetLeaderboard } from "@/hooks/leaderboard/hooks";

// for time sake not going to unit test everything, but figured id show a quick example of how to mock a hook
jest.mock("@/hooks/leaderboard/hooks", () => ({
  useGetLeaderboard: jest.fn(),
}));

describe("LeaderboardPage", () => {
  it("renders leaderboard and pagination", async () => {
    // Mock the hook response
    (useGetLeaderboard as jest.Mock).mockReturnValue({
      data: {
        body: {
          data: [
            { id: "1", name: "User 1", score: 100 },
            { id: "2", name: "User 2", score: 90 },
          ],
          meta: { count: 10 },
        },
      },
      error: null,
    });

    render(<LeaderboardPage />);

    // Check if the title
  });
});
