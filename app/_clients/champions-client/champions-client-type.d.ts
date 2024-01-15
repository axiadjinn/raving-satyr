type ChampionsClient = {
  getChampion: (championId: string) => ChampionData;
  getChampions: () => { [championId: string]: ChampionData };
  getChampionsArray: () => ChampionData[];
  searchChampions: (searchTerm: string) => ChampionData[];
};
