import { DefinedEarnedTrophies, TrophyTitle } from "@/types";

export const calcNumbers = (trophies: TrophyTitle[]) => {
  let entries: DefinedEarnedTrophies = {
    bronze: 0,
    silver: 0,
    gold: 0,
    platinum: 0,
  };
  trophies.forEach((trophy) => {
    const tmp: DefinedEarnedTrophies = {
      bronze: entries.bronze + trophy.earnedTrophies.bronze,
      silver: entries.silver + trophy.earnedTrophies.silver,
      gold: entries.gold + trophy.earnedTrophies.gold,
      platinum: entries.platinum + trophy.earnedTrophies.platinum,
    };
    entries = tmp;
  });
  return entries;
};
