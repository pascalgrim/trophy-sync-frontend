import { DefinedEarnedTrophies } from "@/types";

export function calculateNumberOfTrophies(trophies: DefinedEarnedTrophies) {
  let sum = 0;
  sum += trophies.bronze;
  sum += trophies.silver;
  sum += trophies.gold;
  sum += trophies.platinum;
  return sum;
}
