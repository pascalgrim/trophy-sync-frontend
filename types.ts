export type UserTitlesResponse = {
  totalItemCount: number;
  trophyTitles: TrophyTitle[];
};

export type TrophyTitle = {
  npServiceName: string;
  npCommunicationId: string;
  trophySetVersion: string;
  trophyTitleName: string;
  trophyTitleDetail: string;
  trophyTitleIconUrl: string;
  trophyTitlePlatform: string;
  hasTrophyGroups: boolean;
  definedTrophies: DefinedEarnedTrophies;
  progress: number;
  earnedTrophies: DefinedEarnedTrophies;
  hiddenFlag: boolean;
  lastUpdatedDateTime: string;
};

export type DefinedEarnedTrophies = {
  bronze: number;
  silver: number;
  gold: number;
  platinum: number;
};

export type Trophy = {
  trophyId: number;
  trophyHidden: boolean;
  trophyType: "bronze" | "silver" | "gold" | "platinum";
  earned: boolean;
  earnedDateTime: string;
  trophyDetail: string;
  trophyEarnedRate: string;
  trophyGroupId: string;
  trophyIconUrl: string;
  trophyName: string;
  trophyProgressTargetValue: string;
  trophyRare: TrophyRarity;
  trophyRewardImageUrl: string;
  trophyRewardName: string;
};
export type TrophyS = {
  isEarned: boolean;
  earnedOn: string;
  type: "bronze" | "silver" | "gold" | "platinum";
  rarity: TrophyRarity;
  earnedRate: number;
  trophyName: string;
  groupId: string;
  trophyIconUrl: string;
  detail: string;
};
export type TrophyTitleS = {
  gameName: string;
  platform: string;
  trophyTypeCounts: DefinedEarnedTrophies;
  earnedCounts: DefinedEarnedTrophies;
  trophyList: TrophyS[];
};
export enum TrophyRarity {
  UltraRare = 0,
  VeryRare = 1,
  Rare = 2,
  Common = 3,
}
