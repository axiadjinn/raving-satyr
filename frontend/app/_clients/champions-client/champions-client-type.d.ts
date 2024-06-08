type ChampionsClient = {
  champions: ChampionData[];
  championSearchValue: string;
  setChampionSearchValue: import("react").Dispatch<
    import("react").SetStateAction<string>
  >;
};
