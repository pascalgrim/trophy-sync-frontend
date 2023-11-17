import { Trophy, TrophyS } from "@/types";

export function sortByEarned(trophies: TrophyS[]) {
  const earned: TrophyS[] = [];
  const unEarned: TrophyS[] = [];
  trophies.forEach((trophy) => {
    if (trophy.isEarned) earned.push(trophy);
    else unEarned.push(trophy);
  });
  sortArrByTime(earned);
  return earned.concat(unEarned);
}

export function sortArrByTime(arr: TrophyS[]) {
  arr.sort(function (a, b) {
    const dateA = new Date(a.earnedOn);
    const dateB = new Date(b.earnedOn);

    return dateA < dateB ? 0 : a ? -1 : 1;
  });
}

export function sortTrophiesByName(trophies: TrophyS[]): TrophyS[] {
  return trophies.slice().sort((a, b) => {
    if (a.trophyName < b.trophyName) {
      return -1;
    } else if (a.trophyName > b.trophyName) {
      return 1;
    } else {
      return 0;
    }
  });
}

export function sortByEarnedOn(trophies: TrophyS[]): TrophyS[] {
  return trophies.slice().sort((a, b) => {
    const dateA = a.isEarned ? new Date(a.earnedOn) : null;
    const dateB = b.isEarned ? new Date(b.earnedOn) : null;
    if (!dateA && !dateB) {
      return 0;
    } else if (!dateA) {
      return 1;
    } else if (!dateB) {
      return -1;
    } else {
      return dateA.getTime() - dateB.getTime();
    }
  });
}

export function sortByRarity(trophies: TrophyS[]): TrophyS[] {
  const sorted = trophies.slice().sort((a, b) => b.rarity - a.rarity);
  return sorted;
}
