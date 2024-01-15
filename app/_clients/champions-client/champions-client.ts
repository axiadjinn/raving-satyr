import ChampionsData from "../../_data/champions";

const _ChampionsClient: ChampionsClient = (() => {
  const allChampions = ChampionsData.data;
  const allChampionsArray = Object.values(allChampions);

  function getChampion(championId: string): ChampionData {
    return ChampionsData.data[championId];
  }

  function searchChampions(searchTerm: string): ChampionData[] {
    let searchRegex: RegExp = new RegExp(searchTerm.split("").join(".*"), "i");

    return Object.values(ChampionsData.data).filter(
      (champion) =>
        champion.id.match(searchRegex) || champion.name.match(searchTerm),
    );
  }

  function getChampions(): { [championId: string]: ChampionData } {
    return allChampions;
  }

  function getChampionsArray(): ChampionData[] {
    return allChampionsArray;
  }

  return {
    getChampion,
    getChampions,
    getChampionsArray,
    searchChampions,
  };
})();

export default _ChampionsClient;
