import { contract } from "./contract";
import { initClient } from "@ts-rest/core";

export const fetchClient = initClient(contract, {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3030",
  baseHeaders: {},
  throwOnError: true, // we want to handle errors in the hook
});
