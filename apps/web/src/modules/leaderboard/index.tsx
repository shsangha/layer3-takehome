"use client";

import { Flex, Title, Pagination } from "@repo/ui/components";
import LeaderBoardList from "@/modules/leaderboard/list";
import { useGetLeaderboard } from "@/hooks/leaderboard/hooks";
import { useState } from "react";
import _ from "lodash";
import { V1Leaderboard } from "@repo/api-lib";

// this ideally should be a config, doing this to avoid spending time on that for now
const DEFAULT_LIMIT = 5;

// paginating since we could have far more than the 6 test users from the api. Opting out of infinite scroll because added complexity and potential need to virtualize
export default function LeaderboardPage() {
  const [page, setPage] = useState(1);

  const { data, error } = useGetLeaderboard({
    offset: page - 1,
    limit: DEFAULT_LIMIT,
  });

  const leaderBoardData = _.get(data, "body.data", []) as V1Leaderboard["data"];

  const totalResults = _.toInteger(_.get(data, "body.meta.count", 0));

  const totalPages = Math.ceil(totalResults / DEFAULT_LIMIT);

  if (error) {
    return <div>Error: {error.message}</div>; // not worryig about styling just want to ensure we have a fallback
  }

  return (
    <div>
      <Title mb="xl" fz={"2.6rem"} fs="bold" fw={500} order={2} ta="center">
        Leaderboard
      </Title>

      <Flex
        direction="column"
        ml="auto"
        mr="auto"
        w="100%"
        maw={900}
        justify="center"
        align="center"
      >
        <LeaderBoardList leaderboardData={leaderBoardData} />
        {totalResults > 0 && (
          <Pagination
            mt="xl"
            total={totalPages}
            value={page}
            onChange={setPage}
          />
        )}
      </Flex>
    </div>
  );
}
